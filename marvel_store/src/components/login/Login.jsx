// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/AuthContext.jsx';
import AuthForm from "../authForm/AuthForm.jsx";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        login(email, password)
            .then(() => navigate('/'))
            .catch(() => setError('No se pudo iniciar sesión'));
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            {error && <p className="error">{error}</p>}
            <AuthForm
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                buttonText="Iniciar Sesión"
                buttonIcon="sign-in-alt"
                showName={false}
                showSurname={false}
                showPhone={false}
                showConfirmEmail={false}
            />
        </div>
    );
};

export default Login;
