// ItemDetail.jsx
import React from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './ItemDetail.css';

function ItemDetail({ item, onAdd }) {
    return (
        <div className="item-detail card">
            <img src={item.imageUrl} alt={item.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="price text-success">${item.price}</p>
               
                <ItemCount stock={item.stock} initial={item.initial} onAdd={(quantity) => onAdd(quantity, item)} />

            </div>
        </div>
    );
}

export default ItemDetail;
