// ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemDetail from "../itemDetail/ItemDetail.jsx";

const ItemDetailContainer = ({ item, onAdd }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItemDetails = () => {
            // Simulamos la carga del detalle del ítem
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        fetchItemDetails();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {item ? <ItemDetail item={item} onAdd={onAdd} /> : <p>No item found</p>}
        </div>
    );
}

export default ItemDetailContainer;
