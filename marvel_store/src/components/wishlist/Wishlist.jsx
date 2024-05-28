import { useCart } from '../../hooks/useCart.js';
import { Link } from 'react-router-dom';
import { useWishlist } from "../../contexts/WishlistContext.jsx";
import './Wishlist.css';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    return (
        <div className="wishlist-container">
            <h2>Tu Wishlist</h2>
            {wishlistItems.length > 0 ? (
                <div className="wishlist-items-grid">
                    {wishlistItems.map(item => (
                        <div key={item.id} className="wishlist-item">
                            <img src={item.imageUrl} alt={item.name} className="wishlist-item-image" />
                            <div className="wishlist-item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className="wishlist-item-actions">
                                    <button onClick={() => addToCart(item, 1)} className="btn btn-primary">Agregar al Carrito</button>
                                    <button onClick={() => removeFromWishlist(item.id)} className="btn btn-danger">Eliminar de Wishlist</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-wishlist">
                    <p>Tu wishlist está vacía.</p>
                    <Link to="/" className="btn btn-primary">Explora productos para agregar</Link>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
