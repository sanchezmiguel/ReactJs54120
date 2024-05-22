import PropTypes from 'prop-types';
import {useState} from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './Item.css';
import {useCart} from "../../hooks/useCart.js";
import ItemTitle from "../itemTitle/ItemTitle.jsx";

function Item({item, showAddToCart}) {
    const [itemAdded, setItemAdded] = useState(false);
    const {addToCart} = useCart();

    const handleAdd = (quantity) => {
        addToCart(item, quantity);
        setItemAdded(true);
    };

    return (
        <div className="card">
            <div className="card-header">
                <ItemTitle title={item.name}/>
            </div>
            <img src={item.imageUrl} alt={item.name} className="card-img-top"/>
            <div className="card-body">
                <p>{showAddToCart ? item.description : item.title}</p>
                {showAddToCart && (
                    <div onClick={(e) => e.stopPropagation()}>
                        {itemAdded ? (
                            <>
                                <p>Producto añadido al carrito.</p>
                                <ItemCount stock={item.stock} initial={1} onAdd={handleAdd}/>
                            </>
                        ) : (
                            <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
        initial: PropTypes.number
    }).isRequired,
    showAddToCart: PropTypes.bool
};

export default Item;
