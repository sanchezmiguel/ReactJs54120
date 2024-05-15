import ItemList from "../itemList/ItemList.jsx";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading.jsx";
import Alert from "../alert/Alert.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config.js";

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchItems = () => {
            const q = categoryId ?
                query(collection(db, "items"), where("category", "==", categoryId)) :
                collection(db, "items");

            getDocs(q)
                .then((querySnapshot) => {
                    const fetchedItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setItems(fetchedItems);
                })
                .catch((error) => {
                    console.error('[Item List Container] Error fetching items:', error);
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchItems();
    }, [categoryId]);

    const handleAdd = (quantity, item) => {
        console.log(`Added ${quantity} of ${item.name} to cart.`);
    };

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Alert message={<span>No se pudieron cargar los elementos. <FontAwesomeIcon icon={faFrown} /></span>}
                      type="alert-danger" />;
    }

    return (
        <div className="item-container">
            <ItemList items={items} onAdd={handleAdd} />
        </div>
    );
};

export default ItemListContainer;
