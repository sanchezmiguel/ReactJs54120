// src/components/Signup.jsx
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../contexts/authContext/AuthContext.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await signup(email, password);
            navigate('/');
        } catch (err) {
            setError('No se pudo crear la cuenta');
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">
                    <FontAwesomeIcon icon="user-plus" /> Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
