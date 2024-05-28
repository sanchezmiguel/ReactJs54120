import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../contexts/WishlistContext.jsx';
import './WishlistWidget.css';

const WishlistWidget = () => {
    const { wishlistItems } = useWishlist();
    const itemCount = wishlistItems.length;

    return (
        <div className="wishlist-widget">
            <Link to="/wishlist" className="wishlist-link">
                <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
                <span className="wishlist-text">Wishlist</span>
                {itemCount > 0 && (
                    <span className="wishlist-count">{itemCount}</span>
                )}
            </Link>
        </div>
    );
};

export default WishlistWidget;
