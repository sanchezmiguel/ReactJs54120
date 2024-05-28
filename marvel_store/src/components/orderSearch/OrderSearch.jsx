import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import ItemDetail from '../itemDetail/ItemDetail.jsx';
import './OrderSearch.css';

const OrderSearch = () => {
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setOrderId(event.target.value);
    };

    const handleSearch = () => {
        setError('');
        setOrder(null);
        const orderRef = doc(db, 'purchaseHistory', orderId);
        getDoc(orderRef)
            .then(orderSnap => {
                if (orderSnap.exists()) {
                    setOrder(orderSnap.data());
                } else {
                    setError('No se encontró la orden.');
                }
            })
            .catch(error => {
                setError('Error al buscar la orden. Por favor, inténtelo de nuevo.');
            });
    };

    return (
        <div className="order-search">
            <h2>Buscar Orden</h2>
            <input
                type="text"
                placeholder="Ingrese su Order ID"
                value={orderId}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Buscar</button>
            {error && <p className="error">{error}</p>}
            {order && (
                <div className="order-details">
                    <h3>Detalles de la Orden</h3>
                    <p><strong>ID de la Orden:</strong> {orderId}</p>

                    <p><strong>Total:</strong> {order.totalPrice}</p>
                    {order.items && order.items.map(item => (
                        <ItemDetail key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderSearch;
