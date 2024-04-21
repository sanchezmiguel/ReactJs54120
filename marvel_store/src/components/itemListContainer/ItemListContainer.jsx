import React, { useState } from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";

export const ItemListContainer = ({ greeting }) => {
    const [cartItems, setCartItems] = useState([]);

    const items = [
        { id: 1, name: "Cómics de Spider-Man", stock: 5, initial: 1 },
        { id: 2, name: "Figura de Iron Man", stock: 3, initial: 1 },
        { id: 3, name: "Camiseta de Hulk", stock: 0, initial: 0 }, // Sin stock
        { id: 4, name: "Gorra de Capitán América", stock: 7, initial: 1 }
    ];

    const handleAdd = (quantity, item) => {
        console.log(`Añadido ${quantity} de ${item.name} al carrito.`);
        // Actualiza el estado del carrito
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
                );
            } else {
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    return (
        <div className="item-container">
            <h1 className="greeting-text">{greeting}</h1>
            {items.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <ItemCount stock={item.stock} initial={item.initial} onAdd={(quantity) => handleAdd(quantity, item)} />
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;
