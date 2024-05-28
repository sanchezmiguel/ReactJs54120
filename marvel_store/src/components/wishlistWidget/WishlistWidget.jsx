import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useWishlist} from "../wishlistContext/WishlistContext.jsx";

const WishlistWidget = () => {
    const { wishlistItems } = useWishlist();

    if (wishlistItems.length === 0) {
        return null;
    }

    return (
        <Link to="/wishlist" className="wishlist-widget">
            <FontAwesomeIcon icon="heart" /> Wishlist ({wishlistItems.length})
        </Link>
    );
};

export default WishlistWidget;
