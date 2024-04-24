import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({message, type}) => {
    return (
        <div className={`alert ${type}`} role="alert">
            {message}
        </div>
    );
};

// Update PropTypes to accept a node (which includes strings, elements, etc.)
Alert.propTypes = {
    message: PropTypes.node.isRequired, // 'node' covers strings, elements, and more
    type: PropTypes.string.isRequired
};

export default Alert;
