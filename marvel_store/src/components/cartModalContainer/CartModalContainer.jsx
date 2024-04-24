
import CartModal from "../cartModal/CartModal.jsx";
import {useCart} from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import './CartModalContainer.css';

const CartModalContainer = ({ isOpen, onClose }) => {
    const { cartItems } = useCart();

    // Calculate total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <CartModal isOpen={isOpen} onClose={onClose}>
            <div className="cart-content">
                <h2>Contenido de tu Carrito</h2>
                {cartItems.length > 0 ? (
                    <ul className="cart-items-list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-quantity">{item.quantity} x ${item.price.toFixed(2)}</span>
                                </div>
                                <span className="item-total-price">${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <div className="cart-total">
                    <strong>Total: ${totalPrice.toFixed(2)}</strong>
                </div>
            </div>
        </CartModal>
    );
};

CartModalContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartModalContainer;

