import PropTypes from 'prop-types';
import {useCart} from '../../hooks/useCart';

const CartItemCounter = ({children}) => {
    const {cartItems} = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return children(totalItems);
};

CartItemCounter.propTypes = {
    children: PropTypes.func.isRequired,
};

export default CartItemCounter;
