import CartModal from "../cartModal/CartModal.jsx";
import { useCart } from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import './CartModalContainer.css';
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";
import { useState } from "react";
import CartItem from "../cartItem/CartItem.jsx";
import PurchaseMessage from "../purchaseMessage/PurchaseMessage.jsx";
import CartActions from "../cartActions/CartActions.jsx";
import PaymentModal from "../paymentModal/PaymentModal.jsx";


const CartModalContainer = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [purchaseMessage, setPurchaseMessage] = useState(null);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleClearCart = () => {
        const confirmClear = window.confirm("¿Estás seguro que quieres vaciar el carrito?");
        if (confirmClear) {
            clearCart();
        }
    };

    const handlePurchase = () => {
        setPaymentModalOpen(true);
    };

    const handlePaymentComplete = () => {
        const purchaseNumber = Math.floor(Math.random() * 1000000);
        setPurchaseMessage(`¡Gracias por tu compra! Tu número de compra es ${purchaseNumber}.`);
        clearCart();
        setPaymentModalOpen(false);
    };

    return (
        <>
            <CartModal isOpen={isOpen} onClose={onClose}>
                <div className="cart-content">
                    <h2>Contenido de tu carrito</h2>
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
                    <CartActions
                        handleClearCart={handleClearCart}
                        handlePurchase={handlePurchase}
                        isCartEmpty={cartItems.length === 0}
                    />
                    {purchaseMessage && <PurchaseMessage message={purchaseMessage} />}
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
