// src/components/logoutWidget/LogoutWidget.jsx
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import './LogoutWidget.css';
import {useAuth} from '../../contexts/AuthContext.jsx';
import NavLinkWrapper from "../navLinkWrapper/NavLinkWrapper.jsx";

const LogoutWidget = () => {
    const {logout} = useAuth();

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
        <NavLinkWrapper className="logout-widget-container" onClick={handleLogoutClick}>
            <FontAwesomeIcon icon={faSignOutAlt} className="nav-link-icon" />
            <span className="nav-link-text">Cerrar Sesión</span>
        </NavLinkWrapper>
    );
};

export default LogoutWidget;
