
import CartModal from "../cartModal/CartModal.jsx";
import {useCart} from "../../hooks/useCart.js";
import {useEffect} from "react";  // Ensure correct path


const CartModalContainer = ({ isOpen, onClose }) => {
    const { cartItems } = useCart();  // Retrieve cart items from the context
    useEffect(() => {
        console.log('Cart items updated:', cartItems);
    }, [cartItems]);
    return (
        <CartModal isOpen={isOpen} onClose={onClose}>
            <div>
                <h2>Your Cart</h2>
                {cartItems.length > 0 ? (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - {item.quantity}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </CartModal>
    );
};

export default CartModalContainer;

