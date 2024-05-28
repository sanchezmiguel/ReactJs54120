import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinkWrapper from '../navLinkWrapper/NavLinkWrapper.jsx';

const AuthLink = ({ to, icon, text }) => {
    return (
        <NavLinkWrapper>
            <Link to={to} className="nav-link-inner">
                <FontAwesomeIcon icon={icon} className="nav-link-icon" />
                <span className="nav-link-text">{text}</span>
            </Link>
        </NavLinkWrapper>
    );
};

export default AuthLink;
