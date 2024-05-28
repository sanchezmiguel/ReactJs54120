import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../contexts/WishlistContext.jsx';
import './WishlistWidget.css';
import NavLinkWrapper from "../navLinkWrapper/NavLinkWrapper.jsx";

const WishlistWidget = () => {
    const { wishlistItems } = useWishlist();
    const itemCount = wishlistItems.length;

    return (
        <NavLinkWrapper className="wishlist-widget">
            <Link to="/wishlist" className="nav-link-inner">
                <FontAwesomeIcon icon={faHeart} className="nav-link-icon" />
                <span className="nav-link-text">Wishlist</span>
                {itemCount > 0 && (
                    <span className="nav-link-count">{itemCount}</span>
                )}
            </Link>
        </NavLinkWrapper>
    );
};

export default WishlistWidget;
