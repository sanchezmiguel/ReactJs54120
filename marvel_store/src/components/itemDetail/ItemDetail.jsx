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
import {useWishlist} from "../../contexts/WishlistContext.jsx";

function ItemDetail({item}) {
    const [itemAdded, setItemAdded] = useState(false);
    const {goBack} = useCustomNavigate();
    const {addToCart} = useCart(); // Usar la función addToCart del contexto de carrito
    const {addToWishlist} = useWishlist(); // Usar la función addToWishlist del contexto de wishlist

    const handleAdd = (quantity) => {
        addToCart(item, quantity); // Añadir ítem al carrito usando el contexto de carrito
        setItemAdded(true); // Mostrar mensaje de confirmación
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

                <button className="btn btn-outline-primary mt-2" onClick={() => addToWishlist(item)}>Agregar a Wishlist
                </button>
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
