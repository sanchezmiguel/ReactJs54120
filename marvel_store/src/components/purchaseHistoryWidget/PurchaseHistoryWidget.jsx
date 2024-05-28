// src/components/purchaseHistoryWidget/PurchaseHistoryWidget.jsx
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import './PurchaseHistoryWidget.css';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/authContext/AuthContext';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebase-config';

const PurchaseHistoryWidget = () => {
    const [hasPurchaseHistory, setHasPurchaseHistory] = useState(false);
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            const q = query(
                collection(db, 'purchaseHistory'),
                where('userEmail', '==', currentUser.email)
            );

            getDocs(q)
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        setHasPurchaseHistory(true);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching purchase history: ', error);
                });
        } else {
            setHasPurchaseHistory(false);
        }
    }, [currentUser]);

    if (!currentUser || !hasPurchaseHistory) {
        return null; // Do not render if there is no purchase history or the user is not logged in
    }

    const handleHistoryClick = () => {
        navigate('/purchase-history');
    };

    return (
        <div className="history-widget-container" onClick={handleHistoryClick}>
            <FontAwesomeIcon icon={faHistory} className="history-icon"/>
        </div>
    );
};

export default PurchaseHistoryWidget;
