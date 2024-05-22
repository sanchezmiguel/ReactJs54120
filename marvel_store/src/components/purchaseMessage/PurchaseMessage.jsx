import PropTypes from "prop-types";
import './PurchaseMessage.css';

const PurchaseMessage = ({ message }) => (
    <div className="purchase-message">
        {message}
    </div>
);

PurchaseMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default PurchaseMessage;
