// src/components/logoutWidget/LogoutWidget.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './LogoutWidget.css';
import { useAuth } from '../../contexts/authContext/AuthContext.jsx';

const LogoutWidget = () => {
    const { logout } = useAuth();

    const handleLogoutClick = () => {
        const confirmLogout = window.confirm('¿Estás seguro de que deseas cerrar sesión?');
        if (confirmLogout) {
            logout().then(() => {
                console.log("Sesión cerrada correctamente");
            }).catch(error => {
                console.error("Error al cerrar sesión: ", error);
            });
        }
    };

    return (
        <div className='logout-widget-container' onClick={handleLogoutClick}>
            <FontAwesomeIcon icon={faSignOutAlt} className='logout-icon' />
        </div>
    );
};

export default LogoutWidget;
