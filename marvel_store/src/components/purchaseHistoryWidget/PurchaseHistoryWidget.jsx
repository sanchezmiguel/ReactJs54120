import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import './PurchaseHistoryWidget.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase-config';
import NavLinkWrapper from "../navLinkWrapper/NavLinkWrapper.jsx";

const PurchaseHistoryWidget = () => {
    const [hasPurchaseHistory, setHasPurchaseHistory] = useState(false);
    const { currentUser } = useAuth();

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

    return (
        <NavLinkWrapper className="history-widget-container">
            <Link to="/purchase-history" className="nav-link-inner">
                <FontAwesomeIcon icon={faHistory} className="nav-link-icon" />
                <span className="nav-link-text">Historial de Compras</span>
            </Link>
        </NavLinkWrapper>
    );
};

export default PurchaseHistoryWidget;
