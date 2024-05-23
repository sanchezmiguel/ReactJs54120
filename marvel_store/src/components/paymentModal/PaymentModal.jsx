// PaymentModal.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './PaymentModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons'; // Import from the brands library

const PaymentModal = ({ isOpen, onClose, onComplete }) => {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleCompletePayment = () => {
        if (paymentMethod) {
            onComplete(paymentMethod);
        } else {
            alert('Por favor, selecciona un método de pago');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">X</button>
                <h2>Selecciona tu método de pago</h2>
                <div className="payment-methods">
                    <label className="payment-method">
                        <input
                            type="radio"
                            value="Tarjeta de crédito"
                            checked={paymentMethod === 'Tarjeta de crédito'}
                            onChange={handlePaymentMethodChange}
                        />
                        <FontAwesomeIcon icon={faCreditCard} /> Tarjeta de crédito
                    </label>
                    <label className="payment-method">
                        <input
                            type="radio"
                            value="PayPal"
                            checked={paymentMethod === 'PayPal'}
                            onChange={handlePaymentMethodChange}
                        />
                        <FontAwesomeIcon icon={faPaypal} /> PayPal
                    </label>
                    <label className="payment-method">
                        <input
                            type="radio"
                            value="Transferencia bancaria"
                            checked={paymentMethod === 'Transferencia bancaria'}
                            onChange={handlePaymentMethodChange}
                        />
                        <FontAwesomeIcon icon={faUniversity} /> Transferencia bancaria
                    </label>
                </div>
                <button onClick={handleCompletePayment} className="complete-payment-button">Completar pago</button>
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
