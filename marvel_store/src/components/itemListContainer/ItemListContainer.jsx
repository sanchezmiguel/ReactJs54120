import React, { useState } from 'react';
import ItemCount from "../itemCount/ItemCount.jsx";

export const ItemListContainer = ({ greeting }) => {
    const [cartItems, setCartItems] = useState([]);

    const items = [
        { id: 1, name: "Cómics de Spider-Man", stock: 5, initial: 1 },
        { id: 2, name: "Figura de Iron Man", stock: 3, initial: 1 },
        { id: 3, name: "Camiseta de Hulk", stock: 0, initial: 0 }, // Sin stock
        { id: 4, name: "Gorra de Capitán América", stock: 7, initial: 1 },
        { id: 5, name: "Poster de Thor", stock: 8, initial: 1 },
        { id: 6, name: "Muñeco de Loki", stock: 4, initial: 1 },
        { id: 7, name: "Sudadera de Black Widow", stock: 6, initial: 1 },
        { id: 8, name: "Llavero de Thanos", stock: 10, initial: 1 },
        { id: 9, name: "Figura coleccionable de Groot", stock: 2, initial: 1 },
        { id: 10, name: "Libreta de Doctor Strange", stock: 12, initial: 1 }
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
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4"> {/* Configuración responsive de la grilla */}
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <ItemCount stock={item.stock} initial={item.initial} onAdd={(quantity) => handleAdd(quantity, item)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
