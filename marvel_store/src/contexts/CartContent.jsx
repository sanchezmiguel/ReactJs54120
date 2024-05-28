import PropTypes from "prop-types";
import CartItem from "../components/cartItem/CartItem.jsx";
import PurchaseMessage from "../components/purchaseMessage/PurchaseMessage.jsx";
import Alert from "../components/alert/Alert.jsx";
import CartActions from "../components/cartActions/CartActions.jsx";
import CartTotal from "../components/cartTotal/CartTotal.jsx";
import DiscountCodeInput from "../components/discountCodeInput/DiscountCodeInput.jsx";
import {useAuth} from "./AuthContext.jsx";

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
