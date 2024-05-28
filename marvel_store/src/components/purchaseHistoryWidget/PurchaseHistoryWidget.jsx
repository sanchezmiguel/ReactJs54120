// src/components/purchaseHistoryWidget/PurchaseHistoryWidget.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import './PurchaseHistoryWidget.css';
import { useNavigate } from 'react-router-dom';

const PurchaseHistoryWidget = () => {
    const navigate = useNavigate();

    const handleHistoryClick = () => {
        navigate('/purchase-history');
    };

    return (
        <div className='history-widget-container' onClick={handleHistoryClick}>
            <FontAwesomeIcon icon={faHistory} className='history-icon' />
        </div>
    );
};

export default PurchaseHistoryWidget;
