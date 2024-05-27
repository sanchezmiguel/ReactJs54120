import CartModal from "../cartModal/CartModal.jsx";
import PaymentModal from "../paymentModal/PaymentModal.jsx";
import { useCart } from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import './CartModalContainer.css';
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";
import { useState, useEffect } from "react";
import CartItem from "../cartItem/CartItem.jsx";
import PurchaseMessage from "../purchaseMessage/PurchaseMessage.jsx";
import CartActions from "../cartActions/CartActions.jsx";
import { collection, addDoc, doc, runTransaction } from "firebase/firestore"; // Import Firebase functions
import { db } from "../../firebase-config.js"; // Import Firestore db
import { getClientIp } from "../../utils/utils.js"; // Import the function to get client IP
import Loading from "../loading/Loading.jsx"; // Import the Loading component
import Alert from "../alert/Alert.jsx"; // Import Alert component

const CartModalContainer = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [purchaseMessage, setPurchaseMessage] = useState(null);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discount, setDiscount] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false); // State to handle purchase processing
    const [errorMessage, setErrorMessage] = useState(null); // State to handle errors

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
            resetDiscount();
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
                // Check stock for each item in the cart
                for (const cartItem of cartItems) {
                    const itemRef = doc(db, "items", cartItem.id);
                    const itemDoc = await transaction.get(itemRef);

                    if (!itemDoc.exists) {
                        throw new Error(`El artículo ${cartItem.name} no existe`);
                    }

                    const newStock = itemDoc.data().stock - cartItem.quantity;
                    if (newStock < 0) {
                        throw new Error(`No hay suficiente stock para ${cartItem.name}`);
                    }

                    // Update the stock
                    transaction.update(itemRef, { stock: newStock });
                }

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
            resetDiscount();
        } catch (error) {
            console.error("Error al completar la compra: ", error);
            setErrorMessage(error.message);
        } finally {
            setIsProcessing(false); // Set processing state to false
        }
    };

    const handleApplyDiscount = () => {
        if (discountDictionary[discountCode]) {
            setDiscountApplied(true);
        } else {
            alert('Código de descuento inválido');
        }
    };

    const resetDiscount = () => {
        setDiscountCode('');
        setDiscount(0);
        setDiscountApplied(false);
    };

    return (
        <>
            <CartModal isOpen={isOpen} onClose={onClose}>
                <div className="cart-content">
                    <h2>Contenido de tu carrito</h2>
                    {isProcessing ? (
                        <Loading message="Procesando la compra..." />
                    ) : (
                        <>
                            {cartItems.length > 0 ? (
                                <ul className="cart-items-list">
                                    {cartItems.map(item => (
                                        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                                    ))}
                                </ul>
                            ) : (
                                <p>Carrito vacío.</p>
                            )}
                            <div className="cart-total">
                                <strong>Total: <PriceDisplay price={totalPrice} /></strong>
                            </div>
                            {discountApplied && (
                                <div className="discount">
                                    <strong>Descuento aplicado: - <PriceDisplay price={discount} /></strong>
                                </div>
                            )}
                            <div className="final-total">
                                <strong>Total Final: <PriceDisplay price={finalPrice} /></strong>
                            </div>
                            <div className="discount-code">
                                <input
                                    type="text"
                                    placeholder="Código de descuento"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    disabled={discountApplied}
                                />
                                <button onClick={handleApplyDiscount} disabled={discountApplied}>Aplicar</button>
                            </div>
                            <CartActions
                                handleClearCart={handleClearCart}
                                handlePurchase={handlePurchase}
                                isCartEmpty={cartItems.length === 0}
                            />
                            {purchaseMessage && <PurchaseMessage message={purchaseMessage} />}
                            {errorMessage && <Alert message={errorMessage} type="alert-danger" />}
                        </>
                    )}
                </div>
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
