import PropTypes from "prop-types";
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";

const CartTotal = ({cartItems, discount, finalPrice}) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalWithDiscount = totalPrice - (discount || 0);

    return (
        <>
            <div className="cart-total">
                <strong>Total: <PriceDisplay price={totalPrice}/></strong>
            </div>
            {discount > 0 && (
                <div className="discount">
                    <strong>Descuento aplicado: - <PriceDisplay price={discount}/></strong>
                </div>
            )}
            <div className="final-total">
                <strong>Total Final: <PriceDisplay price={totalWithDiscount}/></strong>
            </div>
        </>
    );
};

CartTotal.propTypes = {
    cartItems: PropTypes.array.isRequired,
    discount: PropTypes.number,
    finalPrice: PropTypes.number
};

export default CartTotal;
