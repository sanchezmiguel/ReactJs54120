// ItemDetailContainer.jsx
import React, {useEffect, useState} from 'react';
import ItemDetail from "../itemDetail/ItemDetail.jsx";
import './ItemDetailContainer.css';

const ItemDetailContainer = ({item, onAdd, onBack}) => {
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
        return <div className="text-center p-5">
            <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>
        </div>;
    }

    return (
        <div className="item-detail-container">
            {item ? <ItemDetail item={item} onAdd={onAdd} onBack={onBack}/> :
                <p className="text-center">No item found</p>}
        </div>
    );
}

export default ItemDetailContainer;
