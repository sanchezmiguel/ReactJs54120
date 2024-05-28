import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const localData = localStorage.getItem('wishlistItems');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (item) => {
        setWishlistItems((prevItems) => {
            if (!prevItems.find((i) => i.id === item.id)) {
                return [...prevItems, item];
            }
            return prevItems;
        });
    };

    const removeFromWishlist = (itemId) => {
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const clearWishlist = () => {
        setWishlistItems([]);
        localStorage.removeItem('wishlistItems');
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

WishlistProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useWishlist = () => useContext(WishlistContext);
