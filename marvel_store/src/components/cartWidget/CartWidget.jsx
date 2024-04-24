import PropTypes from 'prop-types';
import './CartWidget.css';
import CartIcon from "../cartIcon/CartIcon.jsx";

const CartWidget = ({count, onClick, color = 'primary'}) => {
    return (
        <div className='cart-widget-container' onClick={onClick}>
            <CartIcon/>
            {count > 0 && (
                <span className={`badge badge-${color}`}>{count}</span>
            )}
        </div>
    );
};

CartWidget.propTypes = {
    count: PropTypes.number,
    onClick: PropTypes.func,
    color: PropTypes.string // Allows customization of the badge color
};

export default CartWidget;
