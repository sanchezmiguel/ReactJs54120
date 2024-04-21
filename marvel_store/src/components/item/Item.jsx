// Item.jsx
import React from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";


function Item({ item, onAdd }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <ItemCount stock={item.stock} initial={item.initial} onAdd={(quantity) => onAdd(quantity, item)} />
            </div>
        </div>
    );
}

export default Item;
