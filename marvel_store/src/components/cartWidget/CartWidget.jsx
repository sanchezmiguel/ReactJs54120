// CartWidget.jsx
import CartIcon from "../cartIcon/CartIcon.jsx";
import {useCart} from "../../hooks/useCart.js";
import './CartWidget.css';
import {useNavigate} from "react-router-dom";

const CartWidget = () => {
    const {cartItems} = useCart();
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div className='cart-widget-container' onClick={handleCartClick}>
            <CartIcon className='cart-icon'/>
            {itemCount > 0 && <span className='badge badge-primary'>{itemCount}</span>}
        </div>
    );
};

export default CartWidget;
