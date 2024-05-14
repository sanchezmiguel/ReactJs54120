import CartModal from "../cartModal/CartModal.jsx";
import {useCart} from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import './CartModalContainer.css';
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";

const CartModalContainer = ({isOpen, onClose}) => {
    const {cartItems, removeFromCart, clearCart} = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <CartModal isOpen={isOpen} onClose={onClose}>
            <div className="cart-content">
                <h2>Contenido de tu carrito</h2>
                {cartItems.length > 0 ? (
                    <ul className="cart-items-list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-quantity">{item.quantity} x <PriceDisplay price={item.price}/></span>
                                    <span className="item-total-price"><PriceDisplay
                                        price={(item.price * item.quantity)}/></span>

                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="remove-item">Quitar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Carrito vacio.</p>
                )}
                <div className="cart-total">
                    <strong>Total: <PriceDisplay price={totalPrice}/></strong>
                </div>
                <div className="cart-actions">
                    <button onClick={clearCart} className="clear-cart">Vaciar carrito</button>
                    <button onClick={onClose} className="pay-now">Pagar</button>
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

