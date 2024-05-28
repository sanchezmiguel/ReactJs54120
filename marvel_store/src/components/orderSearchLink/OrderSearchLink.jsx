import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavLinkWrapper from '../navLinkWrapper/NavLinkWrapper.jsx';

const OrderSearchLink = () => {
    return (
        <NavLinkWrapper className="order-search-link">
            <Link to="/order-search" className="nav-link-inner">
                <FontAwesomeIcon icon={faSearch} className="nav-link-icon" />
                <span className="nav-link-text">Buscar Orden</span>
            </Link>
        </NavLinkWrapper>
    );
};

export default OrderSearchLink;
