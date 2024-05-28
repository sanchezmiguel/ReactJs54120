// CartModalContainer.jsx
import CartModal from "../cartModal/CartModal.jsx";
import PaymentModal from "../paymentModal/PaymentModal.jsx";
import { useCart } from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import './CartModalContainer.css';
import { addDoc, collection, doc, runTransaction } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { getClientIp } from "../../utils/utils.js";
import PurchaseProcessing from "../purchaseProcessing/PurchaseProcessing.jsx";
import CartContent from "../cartContent/CartContent.jsx";
import { useAuth } from "../../contexts/authContext/AuthContext.jsx";

const CartModalContainer = ({ isOpen, onClose }) => {
    const { cartItems, clearCart, removeFromCart } = useCart();
    const [purchaseMessage, setPurchaseMessage] = useState(null);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discount, setDiscount] = useState(0);
    const { currentUser } = useAuth();

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
            setErrorMessage(null);
        }
    };

    const handlePurchase = () => {
        setPaymentModalOpen(true);
    };

    const handlePaymentComplete = (paymentMethod) => {
        setIsProcessing(true);
        setPaymentModalOpen(false);
        setPurchaseMessage(null);
        setErrorMessage(null);

        runTransaction(db, async (transaction) => {
            const itemsToUpdate = [];
            const stockErrors = [];

            const stockCheckPromises = cartItems.map((cartItem) => {
                const itemRef = doc(db, "items", cartItem.id);
                return transaction.get(itemRef).then((itemDoc) => {
                    if (!itemDoc.exists) {
                        throw new Error(`El artículo ${cartItem.name} no existe`);
                    }

                    const newStock = itemDoc.data().stock - cartItem.quantity;
                    if (newStock < 0) {
                        stockErrors.push(`No hay suficiente stock para ${cartItem.name}`);
                    } else {
                        itemsToUpdate.push({ ref: itemRef, newStock });
                    }
                });
            });

            await Promise.all(stockCheckPromises);

            if (stockErrors.length > 0) {
                throw new Error(stockErrors.join("\n"));
            }

            itemsToUpdate.forEach(({ ref, newStock }) => {
                transaction.update(ref, { stock: newStock });
            });

            const clientIp = await getClientIp();

            const purchaseRef = await addDoc(collection(db, "purchaseHistory"), {
                cartItems,
                totalPrice: finalPrice,
                timestamp: new Date().toISOString(),
                clientIp,
                paymentMethod,
                userEmail: currentUser.email
            });

            return purchaseRef.id; // Return the ID of the purchase document
        })
            .then((orderId) => {
                setPurchaseMessage(`¡Gracias por tu compra! Tu compra se ha completado con éxito. Tu ID de orden es: ${orderId}`);
                clearCart();
            })
            .catch((error) => {
                console.error("Error al completar la compra: ", error);
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsProcessing(false);
            });
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
                    <PurchaseProcessing />
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
            <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setPaymentModalOpen(false)} onComplete={handlePaymentComplete} />
        </>
    );
};

CartModalContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartModalContainer;
