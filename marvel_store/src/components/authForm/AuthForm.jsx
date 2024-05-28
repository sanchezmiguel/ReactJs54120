// AuthForm.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './AuthForm.css';

const AuthForm = ({
                      email,
                      confirmEmail,
                      password,
                      name,
                      surname,
                      phone,
                      setEmail,
                      setConfirmEmail,
                      setPassword,
                      setName,
                      setSurname,
                      setPhone,
                      handleSubmit,
                      buttonText,
                      buttonIcon
                  }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>
                <label>Apellido</label>
                <div>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>
                <label>Teléfono</label>
                <div>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>
                <label>Confirmar Email</label>
                <div>
                    <input
                        type="email"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div>
                <label>Contraseña</label>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button type="submit">
                <FontAwesomeIcon icon={buttonIcon} /> {buttonText}
            </button>
        </form>
    );
};

AuthForm.propTypes = {
    email: PropTypes.string.isRequired,
    confirmEmail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    setConfirmEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setSurname: PropTypes.func.isRequired,
    setPhone: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonIcon: PropTypes.string.isRequired,
};

export default AuthForm;
