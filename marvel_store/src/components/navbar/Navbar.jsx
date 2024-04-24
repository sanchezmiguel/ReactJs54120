import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandLogo from "../brandLogo/BrandLogo.jsx";
import CategoryList from "../categoryList/CategoryList.jsx";
import NavbarToggler from "../navbarToggler/NavbarToggler.jsx";
import CartModalContainer from "../cartModalContainer/CartModalContainer.jsx";
import {useState} from "react";


const Navbar = () => {
    const [isCartModalOpen, setCartModalOpen] = useState(false);

    const handleCartClick = () => {
        setCartModalOpen(true);  // Open the modal on cart click
    };

    const handleCloseModal = () => {
        setCartModalOpen(false);  // Close the modal
    };
    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <BrandLogo/>
            <NavbarToggler/>
            <CategoryList/>
            <CartWidget count={0} onClick={handleCartClick} color="info"/>
            <CartModalContainer isOpen={isCartModalOpen} onClose={handleCloseModal}/>
        </nav>
    );
};

export default Navbar;
