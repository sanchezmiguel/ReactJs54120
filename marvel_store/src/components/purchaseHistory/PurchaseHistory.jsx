// src/components/PurchaseHistory.jsx
import {useEffect, useState} from 'react';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from "../../firebase-config.js";
import {useAuth} from "../../contexts/authContext/AuthContext.jsx";
import './PurchaseHistory.css';

const PurchaseHistory = () => {
    const { currentUser } = useAuth();
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPurchaseHistory = async () => {
            if (currentUser) {
                try {
                    const q = query(
                        collection(db, 'purchaseHistory'),
                        where('userEmail', '==', currentUser.email)
                    );
                    const querySnapshot = await getDocs(q);
                    const purchases = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setPurchaseHistory(purchases);
                } catch (error) {
                    console.error('Error al obtener el historial de compras: ', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPurchaseHistory();
    }, [currentUser]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="purchase-history-container">
            <h2>Tu Historial de Compras</h2>
            {purchaseHistory.length === 0 ? (
                <p>No se encontraron compras.</p>
            ) : (
                <div className="card-container">
                    {purchaseHistory.map(purchase => (
                        <div key={purchase.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Fecha: {new Date(purchase.timestamp).toLocaleString()}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Total: ${purchase.totalPrice.toFixed(2)}</h6>
                                <p className="card-text">Método de Pago: {purchase.paymentMethod}</p>
                                <ul className="list-group list-group-flush">
                                    {purchase.cartItems.map(item => (
                                        <li key={item.id} className="list-group-item">
                                            <p>{item.name} - Cantidad: {item.quantity}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PurchaseHistory;
