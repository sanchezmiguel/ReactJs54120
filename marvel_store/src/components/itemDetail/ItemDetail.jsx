import {useState} from 'react';
import PropTypes from 'prop-types';
import ItemCount from "../itemCount/ItemCount.jsx";
import './ItemDetail.css';
import Alert from "../alert/Alert.jsx";
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";
import StockMessage from "../stockMessage/StockMessage.jsx";
import useCustomNavigate from "../../hooks/useCustomNavigate.js";

function ItemDetail({item, onAdd}) {
    const [itemAdded, setItemAdded] = useState(false);
    const {goBack} = useCustomNavigate();

    const handleAdd = (quantity) => {
        onAdd(quantity, item);
        setItemAdded(true);
    };

    return (
        <div className="item-detail card">
            <img src={item.imageUrl} alt={item.name} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <PriceDisplay price={item.price}/>
                {!itemAdded ? (
                    <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd}/>
                ) : (
                    <Alert message="Producto añadido al carrito" type="alert-success"/>
                )}
                <button className="btn btn-secondary mt-2" onClick={goBack}>Volver</button>
                <StockMessage stock={item.stock}/>
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
};

export default ItemDetail;
