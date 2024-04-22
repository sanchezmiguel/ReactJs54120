// Item.jsx
import React, {useState} from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './Item.css';

function Item({item, onSelectItem, onAdd}) {
    const [itemAdded, setItemAdded] = useState(false);

    const handleAdd = (quantity) => {
        onAdd(quantity, item);
        setItemAdded(true); // Indica que el ítem ha sido añadido
    };

    return (
        <div className="card" onClick={() => onSelectItem(item)}>
            <img src={item.imageUrl} alt={item.name} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {!itemAdded ? (
                    <div onClick={(e) => e.stopPropagation()}>
                        <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd}/>
                    </div>
                ) : (
                    <div className="alert alert-success" role="alert">
                        Producto añadido al carrito
                    </div>
                )}
            </div>
        </div>
    );
}

export default Item;

