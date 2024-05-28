// src/components/cartWidget/CartWidget.jsx
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import {useCart} from '../../hooks/useCart';
import {useAuth} from '../../contexts/AuthContext.jsx';
import NavLinkWrapper from "../navLinkWrapper/NavLinkWrapper.jsx";

const CartWidget = ({onClick}) => {
    const {cartItems} = useCart();
    const {currentUser} = useAuth();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


    if (!currentUser || cartItems.length === 0) {
        return null; // Do not render if there are no items or the user is not logged in
    }

    return (
        <NavLinkWrapper className="cart-widget-container" onClick={onClick}>
            <FontAwesomeIcon icon={faShoppingCart} className="nav-link-icon" />
            <span className="nav-link-text">Carrito</span>
            {totalItems > 0 && (
                <span className="nav-link-count">{totalItems}</span>
            )}
        </NavLinkWrapper>
    );
};

export default CartWidget;

