import './CartWidget.css';
import CartIcon from "../cartIcon/CartIcon.jsx";

const CartWidget = () => {
    return (
        <div className='cart-widget-container'>
            {/*<img className='cart-icon' src={carrito} alt='carrito' />*/}
            <CartIcon/>
            <span className='badge badge-primary'>99</span>
        </div>
    );
};

export default CartWidget;
