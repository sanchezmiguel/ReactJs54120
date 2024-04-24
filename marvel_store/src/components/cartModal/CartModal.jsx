import './CartModal.css';
import PropTypes from "prop-types";

const CartModal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">X</button>
                {children}
            </div>
        </div>
    );
};

CartModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default CartModal;
