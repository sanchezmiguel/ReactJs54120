import CartModal from "../cartModal/CartModal.jsx";
import PaymentModal from "../paymentModal/PaymentModal.jsx";
import { useCart } from "../../hooks/useCart.js";
import PropTypes from "prop-types";
import './CartModalContainer.css';
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";
import { useState, useEffect } from "react";
import CartItem from "../cartItem/CartItem.jsx";
import PurchaseMessage from "../purchaseMessage/PurchaseMessage.jsx";
import CartActions from "../cartActions/CartActions.jsx";


const CartModalContainer = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [purchaseMessage, setPurchaseMessage] = useState(null);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discount, setDiscount] = useState(0);

    const discountDictionary = {
        'DESCUENTO10': 0.1,
        'DESCUENTO20': 0.2,
        'DESCUENTO30': 0.3
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const finalPrice = totalPrice - discount;

    useEffect(() => {
        if (discountApplied && discountDictionary[discountCode]) {
            setDiscount(totalPrice * discountDictionary[discountCode]);
        } else {
            setDiscount(0);
        }
    }, [cartItems, discountCode, discountApplied, totalPrice]);

    const handleClearCart = () => {
        const confirmClear = window.confirm("¿Estás seguro que quieres vaciar el carrito?");
        if (confirmClear) {
            clearCart();
            resetDiscount();
            setPurchaseMessage(null);
        }
    };

    const handlePurchase = () => {
        setPaymentModalOpen(true);
    };

    const handlePaymentComplete = () => {
        const purchaseNumber = Math.floor(Math.random() * 1000000);
        setPurchaseMessage(`¡Gracias por tu compra! Tu número de compra es ${purchaseNumber}.`);
        clearCart();
        setPaymentModalOpen(false);
        resetDiscount();
    };

    const handleApplyDiscount = () => {
        if (discountDictionary[discountCode]) {
            setDiscountApplied(true);
        } else {
            alert('Código de descuento inválido');
        }
    };

    const resetDiscount = () => {
        setDiscountCode('');
        setDiscount(0);
        setDiscountApplied(false);
    };

    return (
        <>
            <CartModal isOpen={isOpen} onClose={onClose}>
                <div className="cart-content">
                    <h2>Contenido de tu carrito</h2>
                    {cartItems.length > 0 ? (
                        <ul className="cart-items-list">
                            {cartItems.map(item => (
                                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                            ))}
                        </ul>
                    ) : (
                        <p>Carrito vacío.</p>
                    )}
                    <div className="cart-total">
                        <strong>Total: <PriceDisplay price={totalPrice} /></strong>
                    </div>
                    {discountApplied && (
                        <div className="discount">
                            <strong>Descuento aplicado: - <PriceDisplay price={discount} /></strong>
                        </div>
                    )}
                    <div className="final-total">
                        <strong>Total Final: <PriceDisplay price={finalPrice} /></strong>
                    </div>
                    <div className="discount-code">
                        <input
                            type="text"
                            placeholder="Código de descuento"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            disabled={discountApplied}
                        />
                        <button onClick={handleApplyDiscount} disabled={discountApplied}>Aplicar</button>
                    </div>
                    <CartActions
                        handleClearCart={handleClearCart}
                        handlePurchase={handlePurchase}
                        isCartEmpty={cartItems.length === 0}
                    />
                    {purchaseMessage && <PurchaseMessage message={purchaseMessage} />}
                </div>
            </CartModal>
            <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setPaymentModalOpen(false)} onComplete={handlePaymentComplete} />
        </>
    );
};

CartModalContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartModalContainer;
