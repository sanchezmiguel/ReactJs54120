// src/components/ItemListContainer.jsx
import ItemList from "../itemList/ItemList.jsx";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading.jsx";
import Alert from "../alert/Alert.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import { collection, getDocs, limit, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase-config.js";

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [lastVisible, setLastVisible] = useState(null);

    const fetchItems = (startAfterDoc = null, clearItems = false) => {
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
                console.error('[Item List Container] Error fetching items:', error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchItems(null, true);  // Clear items and fetch the first 10 elements
    }, [categoryId]);

    const handleAdd = (quantity, item) => {
        console.log(`Añadido ${quantity} de ${item.name} al carrito.`);
    };

    if (loading && items.length === 0) {
        return <Loading />;
    }
    if (error) {
        return <Alert message={<span>No se pudieron cargar los elementos. <FontAwesomeIcon icon={faFrown} /></span>} type="alert-danger" />;
    }

    return (
        <div className="item-container">
            <ItemList items={items} onAdd={handleAdd} />
            {lastVisible && (
                <button onClick={() => fetchItems(lastVisible)} disabled={loading}>
                    {loading ? 'Cargando...' : 'Cargar más'}
                </button>
            )}
        </div>
    );
};

export default ItemListContainer;
