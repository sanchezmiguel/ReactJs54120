// Item.jsx
import PropTypes from 'prop-types';
import {useState} from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";
import './Item.css';
import {useCart} from "../../hooks/useCart.js";
import ItemTitle from "../itemTitle/ItemTitle.jsx";
import Alert from "../alert/Alert.jsx";

function Item({item, showAddToCart}) {
    const [itemAdded, setItemAdded] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const {addToCart, cartItems} = useCart();

    const handleAdd = (quantity) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setShowWarning(true);
        } else {
            addToCart(item, quantity);
            setItemAdded(true);
        }
    };

    const handleConfirmAdd = (quantity) => {
        addToCart(item, quantity, true);
        setShowWarning(false);
        setItemAdded(true);
    };

    const handleCancelAdd = () => {
        setShowWarning(false);
    };

    return (
        <div className="card">
            <div className="card-header">
                <ItemTitle title={item.name}/>
            </div>
            <img src={item.imageUrl} alt={item.name} className="card-img-top"/>
            <div className="card-body">
                <p>{showAddToCart ? item.description : item.title}</p>
                {showAddToCart && (
                    <div onClick={(e) => e.stopPropagation()}>
                        {itemAdded ? (
                            <Alert message="Producto añadido al carrito" type="alert-success"/>
                        ) : (
                            <ItemCount stock={item.stock} initial={item.initial} onAdd={handleAdd}/>
                        )}
                        {showWarning && (
                            <div className="alert alert-warning">
                                <p>El artículo ya está en el carrito. ¿Deseas agregar más?</p>
                                <button onClick={() => handleConfirmAdd(1)}>Sí</button>
                                <button onClick={handleCancelAdd}>No</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
        initial: PropTypes.number
    }).isRequired,
    showAddToCart: PropTypes.bool
};

export default Item;
