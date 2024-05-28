import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList.jsx";
import Loading from "../loading/Loading.jsx";
import Alert from "../alert/Alert.jsx";
import { useFetchItems } from '../../hooks/useFetchItems';
import './itemListContainer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const { items, loading, error, fetchItems, lastVisible } = useFetchItems(categoryId);

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
            <h2>{greeting}</h2>
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
