import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function CategoryLink({ to, children }) {
    return (
        <li className='nav-item'>
            <Link className='nav-link' to={to}>
                {children}
            </Link>
        </li>
    );
}

// Define PropTypes for CategoryLink
CategoryLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default CategoryLink;
