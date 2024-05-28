import PropTypes from "prop-types";
import CartItem from "../cartItem/CartItem.jsx";
import PurchaseMessage from "../purchaseMessage/PurchaseMessage.jsx";
import Alert from "../alert/Alert.jsx";
import CartActions from "../cartActions/CartActions.jsx";
import CartTotal from "../cartTotal/CartTotal.jsx";
import DiscountCodeInput from "../discountCodeInput/DiscountCodeInput.jsx";
import {useAuth} from "../../contexts/authContext/AuthContext.jsx";

const CartContent = ({
                         cartItems,
                         handleClearCart,
                         handlePurchase,
                         purchaseMessage,
                         errorMessage,
                         discount,
                         finalPrice,
                         applyDiscount,
                         removeFromCart
                     }) => {
    const {currentUser} = useAuth(); // Obtener el usuario logueado

    return (
        <div className="cart-content">
            <h2>Contenido de tu carrito</h2>
            {currentUser && (
                <p>Comprar como {currentUser.email}</p>
            )}
            {cartItems.length > 0 ? (
                <>
                    <ul className="cart-items-list">
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
                        ))}
                    </ul>
                    <CartTotal cartItems={cartItems} discount={discount} finalPrice={finalPrice}/>
                    <DiscountCodeInput applyDiscount={applyDiscount}/>
                    <CartActions
                        handleClearCart={handleClearCart}
                        handlePurchase={handlePurchase}
                        isCartEmpty={cartItems.length === 0}
                    />
                </>
            ) : (
                <p>Carrito vacío.</p>
            )}
            {purchaseMessage && <PurchaseMessage message={purchaseMessage}/>}
            {errorMessage && <Alert message={errorMessage} type="alert-danger"/>}
        </div>
    );
};

CartContent.propTypes = {
    cartItems: PropTypes.array.isRequired,
    handleClearCart: PropTypes.func.isRequired,
    handlePurchase: PropTypes.func.isRequired,
    purchaseMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    discount: PropTypes.number,
    finalPrice: PropTypes.number,
    applyDiscount: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
};

export default CartContent;
