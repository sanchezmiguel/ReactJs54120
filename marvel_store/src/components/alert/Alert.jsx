import PropTypes from 'prop-types';
import './Alert.css';
import {useState} from 'react';

const Alert = ({message, type, onClose}) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        if (onClose) onClose(); // Callback for additional actions
    };

    if (!visible) return null;

    const getIconName = (type) => {
        switch (type) {
            case 'alert-success':
                return 'fas fa-check-circle';
            case 'alert-danger':
                return 'fas fa-exclamation-circle';
            case 'alert-warning':
                return 'fas fa-exclamation-triangle';
            case 'alert-info':
                return 'fas fa-info-circle';
            default:
                return '';
        }
    };

    return (
        <div className={`alert ${type}`} role="alert">
            <i className={getIconName(type)}></i> {message}
            {onClose && (
                <button onClick={handleClose} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            )}
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    onClose: PropTypes.func
};

export default Alert;
