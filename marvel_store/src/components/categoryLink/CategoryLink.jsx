import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CategoryLink.css';

const CategoryLink = ({ category }) => {
    return (
        <Link to={`/categories/${category.key}`} className="category-link">
            {category.description}
        </Link>
    );
};

CategoryLink.propTypes = {
    category: PropTypes.shape({
        key: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

export default CategoryLink;
