// Navbar.jsx
import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandLogo from "../brandLogo/BrandLogo.jsx";
import CategoryList from "../categoryList/CategoryList.jsx";
import NavbarToggler from "../navbarToggler/NavbarToggler.jsx";
import CartModalContainer from "../cartModalContainer/CartModalContainer.jsx";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
        </nav>
    );
};

export default Navbar;
