// ItemDetail.jsx
import {useState} from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './ItemDetail.css';
import Alert from "../alert/Alert.jsx";

function ItemDetail({item, onAdd, onBack}) {
    const [itemAdded, setItemAdded] = useState(false);
    const handleAdd = (quantity) => {
        onAdd(quantity, item);
        setItemAdded(true); // Indica que el ítem ha sido añadido
    };

    return (
        <div className="item-detail card">
            <img src={item.imageUrl} alt={item.name} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="price text-success">${item.price}</p>

                {!itemAdded ? (
                    <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd}/>
                ) : (
                    <>
                        <Alert message="Producto añadido al carrito" type="alert-success" />

                        <button className="btn btn-success">Terminar mi compra</button>
                        <button className="btn btn-secondary mt-2" onClick={onBack}>Volver a la lista</button>
                    </>
                )}
                {!itemAdded && (
                    <button className="btn btn-secondary mt-2" onClick={onBack}>Volver</button>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;

