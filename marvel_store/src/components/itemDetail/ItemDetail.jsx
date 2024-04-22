// ItemDetail.jsx
import {useState} from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './ItemDetail.css';

function ItemDetail({ item, onAdd }) {
    const [itemAdded, setItemAdded] = useState(false);
    const handleAdd = (quantity) => {
        onAdd(quantity, item);
        setItemAdded(true); // Indica que el ítem ha sido añadido
    };
    return (
        <div className="item-detail card">
            <img src={item.imageUrl} alt={item.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="price text-success">${item.price}</p>

                {!itemAdded ? (
                    <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd} />
                ) : (
                    <div className="alert alert-success" role="alert">
                        Producto añadido al carrito
                    </div>
                )}
                {itemAdded && <button className="btn btn-success">Terminar mi compra</button>}
            </div>
        </div>
    );
}

export default ItemDetail;
