import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './AuthForm.css';

const AuthForm = ({email, password, setEmail, setPassword, handleSubmit, buttonText, buttonIcon}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></div>
            </div>
            <div>

                <label>Contraseña</label>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /></div>
            </div>
            <button type="submit">
                <FontAwesomeIcon icon={buttonIcon}/> {buttonText}
            </button>
        </form>
    );
};

AuthForm.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
};

export default AuthForm;
