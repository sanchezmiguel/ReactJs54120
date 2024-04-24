import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandLogo from "../brandLogo/BrandLogo.jsx";
import CategoryList from "../categoryList/CategoryList.jsx";
import NavbarToggler from "../navbarToggler/NavbarToggler.jsx";


const Navbar = () => {
    const handleCartClick = () => {
        console.log("Cart icon clicked");
    };
    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <BrandLogo/>
            <NavbarToggler/>
            <CategoryList/>
            <CartWidget count={5} onClick={handleCartClick} color="info" />
        </nav>
    );
};

export default Navbar;
