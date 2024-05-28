import { useState, useCallback } from 'react';
import { collection, getDocs, limit, query, startAfter, where } from "firebase/firestore";
import {db} from "../firebase-config.js";


export const useFetchItems = (categoryId) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [lastVisible, setLastVisible] = useState(null);

    const fetchItems = useCallback((startAfterDoc = null, clearItems = false) => {
        setLoading(true);
        setError(false);

        const q = categoryId
            ? startAfterDoc
                ? query(
                    collection(db, "items"),
                    where("category", "==", categoryId),
                    startAfter(startAfterDoc),
                    limit(10)
                )
                : query(
                    collection(db, "items"),
                    where("category", "==", categoryId),
                    limit(10)
                )
            : startAfterDoc
                ? query(collection(db, "items"), startAfter(startAfterDoc), limit(10))
                : query(collection(db, "items"), limit(10));

        getDocs(q)
            .then((querySnapshot) => {
                const fetchedItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setItems(prevItems => (clearItems ? fetchedItems : [...prevItems, ...fetchedItems]));
                const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
                setLastVisible(lastVisibleDoc);
            })
            .catch((error) => {
                console.error('[useFetchItems] Error fetching items:', error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return { items, loading, error, fetchItems, lastVisible };
};
