import CartIcon from "../cartIcon/CartIcon.jsx";
import {useCart} from "../../hooks/useCart.js"; // Ensure path correctness

const CartWidget = ({ onClick }) => {
    const { cartItems } = useCart(); 
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='cart-widget-container' onClick={onClick}>
            <CartIcon />
            {itemCount > 0 && <span className='badge badge-primary'>{itemCount}</span>}
        </div>
    );
};

export default CartWidget;

