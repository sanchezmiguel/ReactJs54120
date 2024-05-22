import './PaymentModal.css';
import PropTypes from "prop-types";

const PaymentModal = ({ isOpen, onClose, onComplete }) => {
    if (!isOpen) return null;

    const handlePayment = () => {
        // Simulate payment processing
        setTimeout(() => {
            onComplete();
        }, 2000);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">X</button>
                <h2>Selecciona tu método de pago</h2>
                <div className="payment-options">
                    <button className="payment-button" onClick={handlePayment}>Tarjeta de Crédito</button>
                    <button className="payment-button" onClick={handlePayment}>PayPal</button>
                    <button className="payment-button" onClick={handlePayment}>Transferencia Bancaria</button>
                </div>
            </div>
        </div>
    );
};

PaymentModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
};

export default PaymentModal;
