import './CartWidget.css';
import CartIcon from "../cartIcon/CartIcon.jsx";

const CartWidget = () => {
    return (
        <div className='cart-widget-container'>
            <CartIcon/>
            <span className='badge badge-primary'>99</span>
        </div>
    );
};

export default CartWidget;
