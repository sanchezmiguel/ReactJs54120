// Navbar.jsx
import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandLogo from "../brandLogo/BrandLogo.jsx";
import CategoryList from "../categoryList/CategoryList.jsx";
import NavbarToggler from "../navbarToggler/NavbarToggler.jsx";
import CartModalContainer from "../cartModalContainer/CartModalContainer.jsx";
import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/authContext/AuthContext.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const {currentUser, logout} = useAuth();

    useEffect(() => {
        if (location.pathname === "/cart") {
            setCartModalOpen(true);
        }
    }, [location]);

    const handleCloseModal = () => {
        setCartModalOpen(false);
        navigate(-1); // navigate back after closing modal
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <BrandLogo/>
            <NavbarToggler/>
            <CategoryList/>
            <CartWidget/>
            <CartModalContainer isOpen={isCartModalOpen} onClose={handleCloseModal}/>

            {currentUser ? (
                <button onClick={logout}>
                    <FontAwesomeIcon icon="sign-out-alt"/> Logout
                </button>
            ) : (
                <>
                    <Link to="/login">
                        <FontAwesomeIcon icon="sign-in-alt"/> Login
                    </Link>
                    <Link to="/signup">
                        <FontAwesomeIcon icon="user-plus"/> Sign Up
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
