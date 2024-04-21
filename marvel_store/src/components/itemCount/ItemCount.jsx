import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
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
        <div className="item-count">
            <button onClick={handleDecrement} disabled={count <= 0}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count >= stock}>+</button>
            <button onClick={() => onAdd(count)} disabled={count === 0 || stock === 0}>Agregar en Carrito</button>
        </div>
    );
}

export default ItemCount;
