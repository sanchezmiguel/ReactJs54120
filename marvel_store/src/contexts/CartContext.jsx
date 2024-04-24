import { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";

// Creación del contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Intenta recuperar los artículos del carrito desde localStorage
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        // Guarda el carrito en localStorage cada vez que cambia
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    const addToCart = (item, quantity) => {
        setCartItems(prevItems => {
            const index = prevItems.findIndex(i => i.id === item.id);
            if (index !== -1) {
                // Actualiza la cantidad si el artículo ya existe
                const updatedItems = [...prevItems];
                updatedItems[index].quantity += quantity;
                return updatedItems;
            } else {
                // Agrega el artículo nuevo al carrito
                return [...prevItems, {...item, quantity}];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems'); // Limpia el local storage cuando el carrito se vacía
    };

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}
