// src/contexts/CategoryContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // console.log('Fetching categories from Firestore...');
                const querySnapshot = await getDocs(collection(db, 'categories'));
                const categoriesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                // console.log('Categories fetched: ', categoriesList);
                setCategories(categoriesList);
            } catch (error) {
                console.error('Error fetching categories: ', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => useContext(CategoryContext);
