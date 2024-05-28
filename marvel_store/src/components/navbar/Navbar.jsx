import {memo, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import BrandLogo from "../brandLogo/BrandLogo";
import NavbarToggler from "../navbarToggler/NavbarToggler";
import PurchaseHistoryWidget from '../purchaseHistoryWidget/PurchaseHistoryWidget';
import LogoutWidget from '../logoutWidget/LogoutWidget';
import WishlistWidget from "../wishlistWidget/WishlistWidget.jsx";
import {useAuth} from "../../contexts/AuthContext.jsx";
import CategoryDropdown from "../categoryDropdown/CategoryDropdown.jsx";
import CartModalContainer from "../cartModalContainer/CartModalContainer.jsx";
import OrderSearchLink from "../orderSearchLink/OrderSearchLink.jsx";
import AuthLink from "../authLink/AuthLink.jsx";

const Navbar = () => {
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {currentUser} = useAuth();

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
                <BrandLogo/>
                <NavbarToggler/>
                <CategoryDropdown/>
            </div>
            <div className="navbar-right ml-auto">
                {currentUser ? (
                    <>

                        <PurchaseHistoryWidget/>
                        <OrderSearchLink />
                        <WishlistWidget/>
                        <CartWidget onClick={handleCartClick}/>
                        <LogoutWidget/>
                        <CartModalContainer isOpen={isCartModalOpen} onClose={handleCloseModal}/>
                    </>
                ) : (
                    <>
                        <>
                            <AuthLink to="/login" icon="sign-in-alt" text="Iniciar Sesión" />
                            <AuthLink to="/signup" icon="user-plus" text="Registrarse" />
                        </>
                    </>
                )}
            </div>
        </nav>
    );
};

export default memo(Navbar);
