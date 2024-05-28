import PropTypes from 'prop-types';
import Item from "../item/Item.jsx";
import {Link} from 'react-router-dom';
import './ItemList.css';
import {useWishlist} from "../wishlistContext/WishlistContext.jsx";


function ItemList({items}) {
    const {addToWishlist} = useWishlist(); // Usar la función addToWishlist del contexto de wishlist

    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Link to={`/item/${item.id}`}>
                        <Item item={item}/>
                    </Link>
                    <button className="btn btn-outline-primary mt-2" onClick={() => addToWishlist(item)}>
                        Agregar a Wishlist
                    </button>
                </div>
            ))}
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })).isRequired
};

export default ItemList;
