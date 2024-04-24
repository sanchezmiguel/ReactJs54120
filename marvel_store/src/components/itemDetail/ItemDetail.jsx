import {useState} from 'react';
import PropTypes from 'prop-types';
import ItemCount from "../itemCount/ItemCount.jsx";
import './ItemDetail.css';
import Alert from "../alert/Alert.jsx";
import PriceDisplay from "../priceDisplay/PriceDisplay.jsx";
import StockMessage from "../stockMessage/StockMessage.jsx";
import useCustomNavigate from "../../hooks/useCustomNavigate.js";
import {useCart} from "../../hooks/useCart.js";
import ItemTitle from "../itemTitle/ItemTitle.jsx";


function ItemDetail({item}) {
    const [itemAdded, setItemAdded] = useState(false);
    const {goBack} = useCustomNavigate();
    const {addToCart} = useCart(); // Use the addToCart function from the cart context

    const handleAdd = (quantity) => {
        addToCart(item, quantity); // Add item to the cart via the cart context
        setItemAdded(true); // Show confirmation message
    };

    return (
        <div className="item-detail card">
            <div className="card-body">
                <ItemTitle title={item.name}/>
                <p>
                    <img src={item.imageUrl} alt={item.name} className="card-img-top"/>
                </p>
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
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        initial: PropTypes.number.isRequired
    }).isRequired,
};

export default ItemDetail;
