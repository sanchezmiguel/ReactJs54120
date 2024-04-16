import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='cart-widget-container'>
            <img className='cart-icon' src='./images/carrito.png' alt='carrito' />
            <span className='badge badge-primary'>99</span>
        </div>
    );
};

export default CartWidget;
