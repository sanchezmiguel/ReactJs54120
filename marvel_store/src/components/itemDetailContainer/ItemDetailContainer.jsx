// ItemDetailContainer.jsx
import {useEffect, useState} from 'react';
import ItemDetail from "../itemDetail/ItemDetail.jsx";
import './ItemDetailContainer.css';
import Loading from "../loading/Loading.jsx";

const ItemDetailContainer = ({item, onAdd, onBack}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItemDetails = () => {
            // Simulo la carga del detalle del ítem
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        fetchItemDetails();
    }, []);

    if (loading) {
        return <Loading/>;
    }

    return (
        <div className="item-detail-container">
            {item ? <ItemDetail item={item} onAdd={onAdd} onBack={onBack}/> :
                <p className="text-center">No item found</p>}
        </div>
    );
}

export default ItemDetailContainer;
