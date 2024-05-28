// Signup.jsx
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext.jsx";
import AuthForm from "../authForm/AuthForm.jsx";
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const {signup} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (email !== confirmEmail) {
            setError('Los correos electrónicos no coinciden');
            return;
        }

        try {
            await signup(email, password);
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('El correo electrónico ya está en uso');
            } else if (error.code === 'auth/invalid-email') {
                setError('El correo electrónico no es válido');
            } else if (error.code === 'auth/weak-password') {
                setError('La contraseña es demasiado débil');
            } else {
                setError('No se pudo crear la cuenta. Inténtalo de nuevo más tarde');
            }
        }
    };

    return (
        <div className="signup-container">
            <h2>Registrarse</h2>
            {error && <p className="error">{error}</p>}
            <AuthForm
                email={email}
                confirmEmail={confirmEmail}
                password={password}
                name={name}
                surname={surname}
                phone={phone}
                setEmail={setEmail}
                setConfirmEmail={setConfirmEmail}
                setPassword={setPassword}
                setName={setName}
                setSurname={setSurname}
                setPhone={setPhone}
                handleSubmit={handleSubmit}
                buttonText="Registrarse"
                buttonIcon="user-plus"
                showName={true}
                showSurname={true}
                showPhone={true}
                showConfirmEmail={true}
            />
        </div>
    );
};

export default Signup;
