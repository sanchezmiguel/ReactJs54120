import PropTypes from "prop-types";
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";
import './CartItem.css';

const CartItem = ({item, removeFromCart}) => (
    <li className="cart-item">
        <img src={item.imageUrl} alt={item.name} className="cart-item-thumbnail"/>
        <div className="item-details">
            <span className="item-name">{item.name}</span>
            <span className="item-quantity">{item.quantity} x <PriceDisplay price={item.price}/></span>
            <span className="item-total-price"><PriceDisplay price={item.price * item.quantity}/></span>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="remove-item">Quitar</button>
    </li>
);

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;
