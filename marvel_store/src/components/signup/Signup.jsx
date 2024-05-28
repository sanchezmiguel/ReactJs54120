import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../contexts/authContext/AuthContext.jsx";
import AuthForm from "../authForm/AuthForm.jsx";
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        signup(email, password)
            .then(() => navigate('/'))
            .catch(() => setError('No se pudo crear la cuenta'));
    };

    return (
        <div className="signup-container">
            <h2>Registrarse</h2>
            {error && <p className="error">{error}</p>}
            <AuthForm
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                buttonText="Registrarse"
                buttonIcon="user-plus"
            />
        </div>
    );
};
export default Signup;
