import { memo, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import BrandLogo from "../brandLogo/BrandLogo";
import NavbarToggler from "../navbarToggler/NavbarToggler";

import PurchaseHistoryWidget from '../purchaseHistoryWidget/PurchaseHistoryWidget';
import LogoutWidget from '../logoutWidget/LogoutWidget';
import WishlistWidget from "../wishlistWidget/WishlistWidget.jsx";

import { useAuth } from "../../contexts/AuthContext.jsx";
import CartModalContainer from "../cartModalContainer/CartModalContainer.jsx";
import CategoryDropdown from "../categoryDropdown/CategoryDropdown.jsx";

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
            <div className="navbar-left">
                <BrandLogo />
                <NavbarToggler />
                <CategoryDropdown />
            </div>
            <div className="navbar-right ml-auto">
                {currentUser ? (
                    <>
                        <WishlistWidget />
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
            </div>
        </nav>
    );
};

export default memo(Navbar);
