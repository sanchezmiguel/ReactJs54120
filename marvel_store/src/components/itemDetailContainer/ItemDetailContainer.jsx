import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ItemDetail from "../itemDetail/ItemDetail.jsx";
import './ItemDetailContainer.css';
import Loading from "../loading/Loading.jsx";

const ItemDetailContainer = ({item, onAdd, onBack}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItemDetails = () => {
            // Simulating the loading of item details
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

ItemDetailContainer.propTypes = {
    item: PropTypes.shape({
        // Define the expected properties of item here if known
    }),
    onAdd: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
};

export default ItemDetailContainer;
