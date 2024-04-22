import ItemList from "../itemList/ItemList.jsx";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer.jsx";
import {useEffect, useState} from "react";
import Loading from "../loading/Loading.jsx";
import Alert from "../alert/Alert.jsx";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setLoading(true);

        // Simular carga con tiempo de espera y posibilidad de fallo
        setTimeout(() => {
            const shouldFail = Math.random() < 0.1; // 10% de probabilidad de fallar

            if (shouldFail) {
                setError(true);
                setLoading(false);
            } else {
                fetch('products_mock.json')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        setItems(data);
                        setLoading(false);
                        setError(false);
                    })
                    .catch(error => {
                        console.error('Error fetching items:', error);
                        setLoading(false);
                        setError(true);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        }, 2000);
    }, []);

    const handleAdd = (quantity, item) => {
        console.log(`Añadido ${quantity} de ${item.name} al carrito.`);
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    if (loading) {
        return <Loading/>;
    }
    if (error) {
        return <Alert message="No se pudieron cargar los elementos. :(" type="alert-danger"/>;
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
