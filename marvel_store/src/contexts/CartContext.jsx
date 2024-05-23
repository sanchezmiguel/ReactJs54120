// CartContext.jsx
import {createContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item, quantity, confirm = false) => {
        setCartItems(prevItems => {
            const index = prevItems.findIndex(i => i.id === item.id);
            if (index !== -1) {
                if (confirm || window.confirm(`El artículo ya está en el carrito. ¿Deseas agregar ${quantity} más?`)) {
                    const updatedItems = [...prevItems];
                    updatedItems[index].quantity += quantity;
                    return updatedItems;
                }
                return prevItems;
            } else {
                return [...prevItems, {...item, quantity}];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
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
