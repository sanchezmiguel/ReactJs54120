// src/components/navbar/Navbar.jsx
import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandLogo from "../brandLogo/BrandLogo";
import CategoryList from "../categoryList/CategoryList";
import NavbarToggler from "../navbarToggler/NavbarToggler";
import CartModalContainer from "../cartModalContainer/CartModalContainer";
import PurchaseHistoryWidget from '../purchaseHistoryWidget/PurchaseHistoryWidget';
import LogoutWidget from '../logoutWidget/LogoutWidget';
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    useEffect(() => {
        if (location.pathname === "/cart") {
            setCartModalOpen(true);
        }
    }, [location]);

    const handleCloseModal = () => {
        setCartModalOpen(false);
        navigate(-1); // navigate back after closing modal
    };

    const handleCartClick = () => {
        setCartModalOpen(true);
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <BrandLogo />
            <NavbarToggler />
            <CategoryList />
            {currentUser ? (
                <>
                    <PurchaseHistoryWidget />
                    <CartWidget onClick={handleCartClick} />
                    <LogoutWidget />
                    <CartModalContainer isOpen={isCartModalOpen} onClose={handleCloseModal} />
                </>
            ) : (
                <>
                    <Link to="/login">
                        <FontAwesomeIcon icon="sign-in-alt" /> Iniciar Sesión
                    </Link>
                    <Link to="/signup">
                        <FontAwesomeIcon icon="user-plus" /> Registrarse
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
