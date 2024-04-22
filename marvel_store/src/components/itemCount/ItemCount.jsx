import React, {useState} from 'react';
import './ItemCount.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count d-flex flex-column align-items-center justify-content-center p-3">
            <div className="d-flex align-items-center">
                <button className="btn btn-secondary" onClick={handleDecrement} disabled={count <= 0}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <span className="mx-3">{count}</span>
                <button className="btn btn-secondary" onClick={handleIncrement} disabled={count >= stock}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => onAdd(count)} disabled={count === 0 || stock === 0}>
                <FontAwesomeIcon icon={faShoppingCart}/> Agregar en Carrito
            </button>
        </div>
    );
}

export default ItemCount;
