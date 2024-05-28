// src/components/ItemDetailContainer.jsx
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ItemDetail from "../itemDetail/ItemDetail.jsx";
import Loading from "../loading/Loading.jsx";
import Alert from "../alert/Alert.jsx";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase-config.js";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        console.log(`Fetching details for item with ID: ${id}`); // Debug log
        const docRef = doc(db, "items", id);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    console.log(`Document found: ${docSnap.id}`); // Debug log
                    setItem({id: docSnap.id, ...docSnap.data()});
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.error('Error fetching item details:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading/>;
    }

    if (!item) {
        return <Alert message="Artículo no encontrado." type="alert-danger"
                      onClose={() => console.log('Alerta cerrada')}/>;
    }

    const handleBack = () => {
        navigate(-1); // Navigates back to the last page
    };

    return (
        <ItemDetail item={item} showAddToCart onAdd={() => {
        }} onBack={handleBack}/>
    );
};

export default ItemDetailContainer;
