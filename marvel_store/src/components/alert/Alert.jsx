import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ message, type }) => {
    return (
        <div className={`alert ${type}`} role="alert">
            {message}
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Alert;
