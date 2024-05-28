import PropTypes from 'prop-types';
import './NavLinkWrapper.css';

const NavLinkWrapper = ({ children, onClick, className }) => {
    return (
        <div className={`nav-link-wrapper ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

NavLinkWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

NavLinkWrapper.defaultProps = {
    onClick: null,
    className: '',
};

export default NavLinkWrapper;
