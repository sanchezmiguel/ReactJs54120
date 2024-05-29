// src/components/cartWidget/CartWidget.jsx
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import {useAuth} from '../../contexts/AuthContext.jsx';
import NavLinkWrapper from "../navLinkWrapper/NavLinkWrapper.jsx";
import CartItemCounter from "../cartItemCounter/CartItemCounter.jsx";


const CartWidget = ({onClick}) => {
    const {currentUser} = useAuth();

    if (!currentUser) {
        return null; // Do not render if the user is not logged in
    }

    return (
        <CartItemCounter>
            {totalItems => (
                totalItems > 0 ? (
                    <NavLinkWrapper className="cart-widget-container" onClick={onClick}>
                        <FontAwesomeIcon icon={faShoppingCart} className="nav-link-icon" />
                        <span className="nav-link-text">Carrito</span>
                        <span className="nav-link-count">{totalItems}</span>
                    </NavLinkWrapper>
                ) : null
            )}
        </CartItemCounter>
    );
};

export default CartWidget;
