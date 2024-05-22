import CartIcon from "../cartIcon/CartIcon.jsx";
import {useCart} from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import './CartWidget.css';

const CartWidget = ({onClick}) => {
    const {cartItems} = useCart();
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='cart-widget-container' onClick={onClick}>
            <CartIcon className='cart-icon'/>
            {itemCount > 0 && <span className='badge badge-primary'>{itemCount}</span>}
        </div>
    );
};

CartWidget.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CartWidget;
