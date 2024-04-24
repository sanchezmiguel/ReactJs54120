// ItemDetailContainer.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from "../itemDetail/ItemDetail.jsx";
import Loading from "../loading/Loading.jsx";
import Alert from "../alert/Alert.jsx";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItemDetails = () => {
            fetch(`/products_mock.json`)
                .then(res => res.json())
                .then(data => {
                    const selectedItem = data.find(i => i.id.toString() === id);
                    setItem(selectedItem);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching item details:', error);
                });
        };

        fetchItemDetails();
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!item) {
        return <Alert message="Item not found." type="alert-danger" />;
    }

    // Provide a way to navigate back
    const handleBack = () => {
        navigate(-1); // Navigates back to the last page
    };

    return (
        <ItemDetail item={item} onAdd={() => {}} onBack={handleBack} />
    );
};

export default ItemDetailContainer;
