import CartModal from "../cartModal/CartModal.jsx";
import PaymentModal from "../paymentModal/PaymentModal.jsx";
import {useCart} from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import './CartModalContainer.css';
import {addDoc, collection, doc, runTransaction} from "firebase/firestore";
import {db} from "../../firebase-config.js";
import {getClientIp} from "../../utils/utils.js";
import PurchaseProcessing from "../purchaseProcessing/PurchaseProcessing.jsx";
import CartContent from "../cartContent/CartContent.jsx"; // Import the function to get client IP

const CartModalContainer = ({isOpen, onClose}) => {
    const {cartItems, clearCart, removeFromCart} = useCart(); // Include removeFromCart
    const [purchaseMessage, setPurchaseMessage] = useState(null);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false); // State to handle purchase processing
    const [errorMessage, setErrorMessage] = useState(null); // State to handle errors
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discount, setDiscount] = useState(0);

    const discountDictionary = {
        'DESCUENTO10': 0.1,
        'DESCUENTO20': 0.2,
        'DESCUENTO30': 0.3
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const finalPrice = totalPrice - discount;

    useEffect(() => {
        if (discountApplied && discountDictionary[discountCode]) {
            setDiscount(totalPrice * discountDictionary[discountCode]);
        } else {
            setDiscount(0);
        }
    }, [cartItems, discountCode, discountApplied, totalPrice]);

    const handleClearCart = () => {
        const confirmClear = window.confirm("¿Estás seguro que quieres vaciar el carrito?");
        if (confirmClear) {
            clearCart();
            setPurchaseMessage(null);
            setErrorMessage(null); // Clear previous error message
        }
    };

    const handlePurchase = () => {
        setPaymentModalOpen(true);
    };

    const handlePaymentComplete = async (paymentMethod) => {
        setIsProcessing(true); // Set processing state to true
        setPaymentModalOpen(false); // Close the payment modal first
        setPurchaseMessage(null); // Clear previous purchase message
        setErrorMessage(null); // Clear previous error message

        try {
            await runTransaction(db, async (transaction) => {
                const itemsToUpdate = [];
                const stockErrors = [];

                // Check stock for each item in the cart
                for (const cartItem of cartItems) {
                    const itemRef = doc(db, "items", cartItem.id);
                    const itemDoc = await transaction.get(itemRef);

                    if (!itemDoc.exists) {
                        throw new Error(`El artículo ${cartItem.name} no existe`);
                    }

                    const newStock = itemDoc.data().stock - cartItem.quantity;
                    if (newStock < 0) {
                        stockErrors.push(`No hay suficiente stock para ${cartItem.name}`);
                    } else {
                        itemsToUpdate.push({ref: itemRef, newStock});
                    }
                }

                // If there are stock errors, throw an error
                if (stockErrors.length > 0) {
                    throw new Error(stockErrors.join("\n"));
                }

                // Update the stock
                itemsToUpdate.forEach(({ref, newStock}) => {
                    transaction.update(ref, {stock: newStock});
                });

                // Proceed with the purchase
                const clientIp = await getClientIp();
                await addDoc(collection(db, "purchaseHistory"), {
                    cartItems,
                    totalPrice: finalPrice,
                    timestamp: new Date().toISOString(),
                    clientIp, // Store client IP
                    paymentMethod // Store payment method
                });
            });

            setPurchaseMessage("¡Gracias por tu compra! Tu compra se ha completado con éxito.");
            clearCart();
        } catch (error) {
            console.error("Error al completar la compra: ", error);
            setErrorMessage(error.message);
        } finally {
            setIsProcessing(false); // Set processing state to false
        }
    };

    const applyDiscount = (code) => {
        setDiscountCode(code);
        if (discountDictionary[code]) {
            setDiscountApplied(true);
        } else {
            alert('Código de descuento inválido');
        }
    };

    return (
        <>
            <CartModal isOpen={isOpen} onClose={onClose}>
                {isProcessing ? (
                    <PurchaseProcessing/>
                ) : (
                    <CartContent
                        cartItems={cartItems}
                        handleClearCart={handleClearCart}
                        handlePurchase={handlePurchase}
                        purchaseMessage={purchaseMessage}
                        errorMessage={errorMessage}
                        discount={discount}
                        finalPrice={finalPrice}
                        applyDiscount={applyDiscount}
                        removeFromCart={removeFromCart}
                    />
                )}
            </CartModal>
            <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setPaymentModalOpen(false)}
                          onComplete={handlePaymentComplete}/>
        </>
    );
};

CartModalContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartModalContainer;
