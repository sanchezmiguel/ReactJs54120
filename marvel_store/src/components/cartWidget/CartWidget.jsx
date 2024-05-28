// src/components/cartWidget/CartWidget.jsx
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import {useCart} from '../../hooks/useCart';
import {useAuth} from '../../contexts/authContext/AuthContext';

const CartWidget = ({onClick}) => {
    const {cartItems} = useCart();
    const {currentUser} = useAuth();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


    if (!currentUser || cartItems.length === 0) {
        return null; // Do not render if there are no items or the user is not logged in
    }

    return (
        <div className="cart-widget-container" onClick={onClick}>
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon"/>
            <span className="cart-item-count">{totalItems}</span>
        </div>
    );
};

export default CartWidget;

