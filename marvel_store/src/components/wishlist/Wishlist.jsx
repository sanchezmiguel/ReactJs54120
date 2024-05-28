import {useCart} from '../../hooks/useCart.js';
import {Link} from 'react-router-dom';
import {useWishlist} from "../../contexts/WishlistContext.jsx";

const Wishlist = () => {
    const {wishlistItems, removeFromWishlist} = useWishlist();
    const {addToCart} = useCart();

    return (
        <div className="wishlist-container">
            <h2>Tu Wishlist</h2>
            {wishlistItems.length > 0 ? (
                <ul className="wishlist-items-list">
                    {wishlistItems.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <button onClick={() => addToCart(item, 1)}>Agregar al Carrito</button>
                            <button onClick={() => removeFromWishlist(item.id)}>Eliminar de Wishlist</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Tu wishlist está vacía. <Link to="/">Explora productos</Link> para agregar.</p>
            )}
        </div>
    );
};

export default Wishlist;
