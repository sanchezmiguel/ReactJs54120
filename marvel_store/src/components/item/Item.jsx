import PropTypes from 'prop-types';
import {useState} from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './Item.css';
import {useCart} from "../../hooks/useCart.js";

function Item({item, onSelectItem}) {
    const [itemAdded, setItemAdded] = useState(false);
    const {addToCart} = useCart();  // Using the cart context

    const handleAdd = (quantity) => {
        addToCart(item, quantity);
        setItemAdded(true);
    };

    return (
        <div className="card" onClick={() => onSelectItem(item)}>
            <img src={item.imageUrl} alt={item.name} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div onClick={(e) => e.stopPropagation()}>
                    {itemAdded ? (
                        <>
                            <p>Producto añadido al carrito. Ajuste la cantidad:</p>
                            <ItemCount stock={item.stock} initial={1} onAdd={handleAdd}/>
                        </>
                    ) : (
                        <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd}/>
                    )}
                </div>
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
        initial: PropTypes.number
    }).isRequired,
    onSelectItem: PropTypes.func.isRequired,
};

export default Item;
