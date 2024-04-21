import ItemList from "../itemList/ItemList.jsx";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer.jsx";
import {useEffect, useState} from "react";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                const shouldFail = Math.random() < 0.1; // 10% de probabilidad de fallar
                if (shouldFail) {
                    reject(new Error('Failed to fetch items'));
                } else {

                    resolve( [
                        {id: 1, name: "Cómics de Spider-Man", stock: 5, initial: 1, price: 50, description: "Increíble colección de cómics de tu héroe favorito, Spider-Man."},
                        {id: 2, name: "Figura de Iron Man", stock: 3, initial: 1, price: 120, description: "Una figura de Iron Man para añadir a tu colección de superhéroes."},
                        {id: 3, name: "Camiseta de Hulk", stock: 0, initial: 0, price: 150, description: "Camiseta con el increíble Hulk estampado. ¡Hazte notar!"},
                        {id: 4, name: "Gorra de Capitán América", stock: 7, initial: 1, price: 500, description: "Gorra auténtica del Capitán América para lucir como un verdadero héroe."},
                        {id: 5, name: "Poster de Thor", stock: 8, initial: 1, price: 80, description: "Poster de Thor, el poderoso dios del trueno, para decorar tu habitación."},
                        {id: 6, name: "Muñeco de Loki", stock: 4, initial: 1, price: 560, description: "Muñeco de Loki, el astuto y carismático villano del universo Marvel."},
                        {id: 7, name: "Sudadera de Black Widow", stock: 6, initial: 1, price: 1500, description: "Sudadera de Black Widow, perfecta para los fans de la espía más letal de Marvel."},
                        {id: 8, name: "Llavero de Thanos", stock: 10, initial: 1, price: 550, description: "Llavero de Thanos, el temible titán obsesionado con el equilibrio del universo."},
                        {id: 9, name: "Figura coleccionable de Groot", stock: 2, initial: 1, price: 40, description: "Figura coleccionable de Groot, el adorable y misterioso árbol viviente."},
                        {id: 10, name: "Libreta de Doctor Strange", stock: 12, initial: 1, price: 5000, description: "Libreta de Doctor Strange para apuntar tus hechizos y conjuros más poderosos."}
                    ]);
                }
            }, 2000);
        });

        fetchItems
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleAdd = (quantity, item) => {
        console.log(`Añadido ${quantity} de ${item.name} al carrito.`);
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>No se pudieron cargar los elementos.</div>;
    }

    return (
        <div className="item-container">
            {selectedItem ? (
                <ItemDetailContainer item={selectedItem} onAdd={handleAdd} />
            ) : (
                <ItemList items={items} onAdd={handleAdd} onSelectItem={handleSelectItem} />
            )}
        </div>
    );
};

export default ItemListContainer;
