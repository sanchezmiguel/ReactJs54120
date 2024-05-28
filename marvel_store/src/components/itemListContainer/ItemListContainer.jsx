import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../itemList/ItemList.jsx';
import Loading from '../loading/Loading.jsx';
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryKey } = useParams(); // Obtener la categoría seleccionada de los parámetros de la URL

    useEffect(() => {
        const fetchItems = () => {
            setLoading(true);
            const itemsCollection = collection(db, 'items');
            let itemsQuery;

            if (categoryKey) {
                itemsQuery = query(itemsCollection, where('category', '==', categoryKey));
            } else {
                itemsQuery = itemsCollection;
            }

            return getDocs(itemsQuery)
                .then(snapshot => {
                    const itemList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setItems(itemList);
                })
                .catch(error => {
                    console.error('Error fetching items: ', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchItems();
    }, [categoryKey]);

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    );
};
