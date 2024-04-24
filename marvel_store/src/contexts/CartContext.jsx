import  { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        setCartItems(prevItems => {
            const index = prevItems.findIndex(i => i.id === item.id);
            if (index !== -1) {
                // Create a new array with updated item
                return prevItems.map((cartItem, idx) =>
                    idx === index ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
                );
            } else {
                // Add new item to the cart
                return [...prevItems, { ...item, quantity }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

