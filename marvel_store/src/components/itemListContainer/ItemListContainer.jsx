import ItemList from "../itemList/ItemList.jsx";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer.jsx";
import {useEffect, useState} from "react";
import Loading from "../loading/Loading.jsx";
import Alert from "../alert/Alert.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFrown} from '@fortawesome/free-solid-svg-icons';
import {useParams} from "react-router-dom";
import config from "../../config.js";

export const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setLoading(true);

        // Simulate load with delay and possibility of failure
        setTimeout(() => {
            const shouldFail = Math.random() < 0.1; // 10% chance of failure

            if (shouldFail) {
                setError(true);
                setLoading(false);
            } else {
                fetch(config.API_URL)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok ' + response.statusText);
                        }
                        console.log("[Item List Container] ", response);
                        return response.json();
                    })
                    .then(data => {
                        console.log("[Item List Container] Filtering...");
                        console.log(categoryId);

                        const filteredItems = categoryId ? data.filter(item => item.category === categoryId) : data;
                        console.log(filteredItems);
                        setItems(filteredItems);
                        setLoading(false);
                        setError(false);
                    })
                    .catch(error => {
                        console.error('[Item List Container] Error fetching items:', error);
                        setLoading(false);
                        setError(true);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        }, 1000);
    }, [categoryId]);

    const handleAdd = (quantity, item) => {
        console.log(`Added ${quantity} of ${item.name} to cart.`);
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    if (loading) {
        return <Loading/>;
    }
    if (error) {
        return <Alert message={<span>No se pudieron cargar los elementos. <FontAwesomeIcon icon={faFrown}/></span>}
                      type="alert-danger"/>;
    }
    const handleBackToList = () => {
        setSelectedItem(null);
    };

    return (
        <div className="item-container">
            {selectedItem ? (
                <ItemDetailContainer item={selectedItem} onAdd={handleAdd} onBack={handleBackToList}/>
            ) : (
                <ItemList items={items} onAdd={handleAdd} onSelectItem={handleSelectItem}/>
            )}
        </div>
    );
};

export default ItemListContainer;
