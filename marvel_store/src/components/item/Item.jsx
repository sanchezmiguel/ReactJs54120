// Item.jsx
import React from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './Item.css';

function Item({ item, onSelectItem, onAdd }) {
    return (
        <div className="card" onClick={() => onSelectItem(item)}>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div onClick={(e) => e.stopPropagation()}>
                    <ItemCount stock={item.stock} initial={item.initial} onAdd={(quantity) => onAdd(quantity, item)} />
                </div>
            </div>
        </div>
    );
}

export default Item;
