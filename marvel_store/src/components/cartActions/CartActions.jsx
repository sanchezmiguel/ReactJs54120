import PropTypes from "prop-types";
import './CartActions.css';

const CartActions = ({handleClearCart, handlePurchase, isCartEmpty}) => (
    <div className="cart-actions">
        <button onClick={handleClearCart} className="clear-cart" disabled={isCartEmpty}>Vaciar carrito</button>
        <button onClick={handlePurchase} className="pay-now" disabled={isCartEmpty}>Pagar</button>
    </div>
);

CartActions.propTypes = {
    handleClearCart: PropTypes.func.isRequired,
    handlePurchase: PropTypes.func.isRequired,
    isCartEmpty: PropTypes.bool.isRequired,
};

export default CartActions;
