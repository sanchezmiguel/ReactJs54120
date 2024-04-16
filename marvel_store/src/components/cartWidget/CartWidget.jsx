import './CartWidget.css';
import carrito from '../../images/carrito.png';

const CartWidget = () => {
    return (
        <div className='cart-widget-container'>
            <img className='cart-icon' src={carrito} alt='carrito' />
            <span className='badge badge-primary'>99</span>
        </div>
    );
};

export default CartWidget;
