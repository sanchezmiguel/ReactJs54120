import CartModal from "../cartModal/CartModal.jsx";
import { useCart } from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import './CartModalContainer.css';
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";
import { useState } from "react";

const CartModalContainer = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [purchaseMessage, setPurchaseMessage] = useState(null);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleClearCart = () => {
        const confirmClear = window.confirm("¿Estás seguro que quieres vaciar el carrito?");
        if (confirmClear) {
            clearCart();
        }
    };

    const handlePurchase = () => {
        const purchaseNumber = Math.floor(Math.random() * 1000000);
        setPurchaseMessage(`¡Gracias por tu compra! Tu número de compra es ${purchaseNumber}.`);
        clearCart();
    };

    return (
        <CartModal isOpen={isOpen} onClose={onClose}>
            <div className="cart-content">
                <h2>Contenido de tu carrito</h2>
                {cartItems.length > 0 ? (
                    <ul className="cart-items-list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-thumbnail" />
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-quantity">{item.quantity} x <PriceDisplay price={item.price} /></span>
                                    <span className="item-total-price"><PriceDisplay price={(item.price * item.quantity)} /></span>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="remove-item">Quitar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Carrito vacío.</p>
                )}
                <div className="cart-total">
                    <strong>Total: <PriceDisplay price={totalPrice} /></strong>
                </div>
                <div className="cart-actions">
                    <button onClick={handleClearCart} className="clear-cart" disabled={cartItems.length === 0}>Vaciar carrito</button>
                    <button onClick={handlePurchase} className="pay-now" disabled={cartItems.length === 0}>Pagar</button>
                </div>
                {purchaseMessage && (
                    <div className="purchase-message">
                        {purchaseMessage}
                    </div>
                )}
            </div>
        </CartModal>
    );
};

CartModalContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartModalContainer;
