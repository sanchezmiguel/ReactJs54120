import {useState} from 'react';
import PropTypes from 'prop-types';
import ItemCount from "../itemCount/ItemCount.jsx";
import './Item.css';
import Alert from "../alert/Alert.jsx";

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
                    <Alert message="Producto añadido al carrito" type="alert-success"/>
                )}
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stock: PropTypes.number,
        initial: PropTypes.number
    }).isRequired,
    onSelectItem: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};

export default Item;
