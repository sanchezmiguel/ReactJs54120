import PropTypes from 'prop-types';
import ItemCount from "../itemCount/ItemCount.jsx";
import './Item.css';

import React from 'react';

function Item({ item, onSelectItem, onAdd }) {
    const [itemAdded, setItemAdded] = React.useState(false);

    const handleAdd = (quantity) => {
        onAdd(quantity, item);
        setItemAdded(true);
    };

    return (
        <div className="card" onClick={() => onSelectItem(item)}>
            <img src={item.imageUrl} alt={item.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {!itemAdded ? (
                    <div onClick={(e) => e.stopPropagation()}>
                        <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd} />
                    </div>
                ) : (
                    <p>Producto añadido al carrito</p>
                )}
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stock: PropTypes.number,
        initial: PropTypes.number
    }).isRequired,
    onSelectItem: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};

export default Item;
