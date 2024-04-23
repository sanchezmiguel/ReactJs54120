import { useState } from 'react';
import PropTypes from 'prop-types';
import ItemCount from "../itemCount/ItemCount.jsx";
import './ItemDetail.css';
import Alert from "../alert/Alert.jsx";

function ItemDetail({ item, onAdd, onBack }) {
    const [itemAdded, setItemAdded] = useState(false);

    const handleAdd = (quantity) => {
        onAdd(quantity, item);
        setItemAdded(true);
    };

    const renderStockMessage = (stock) => {
        if (stock > 1) {
            return `${stock} unidades disponibles`;
        } else if (stock === 1) {
            return "Última unidad disponible";
        } else {
            return "No hay stock disponible";
        }
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
                        <Alert message="Producto añadido al carrito" type="alert-success"/>
                        <div className="button-group">
                            <button className="btn btn-success">Terminar mi compra</button>
                            <button className="btn btn-secondary" onClick={onBack}>Volver a la lista</button>
                        </div>
                    </>
                )}
                {!itemAdded && (
                    <>
                        <button className="btn btn-secondary mt-2" onClick={onBack}>Volver</button>
                        <p className="text-center mt-2">{renderStockMessage(item.stock)}</p>
                    </>
                )}
            </div>
        </div>
    );
}

ItemDetail.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        initial: PropTypes.number.isRequired
    }).isRequired,
    onAdd: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
};

export default ItemDetail;
