import { Link } from "react-router-dom";

function CategoryList() {
    return (
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/category/comics-libros'>Cómics y Libros</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/category/figuras-juguetes'>Figuras y Juguetes</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/category/vestimenta'>Vestimenta</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/category/decoracion'>Decoración</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/category/accesorios'>Accesorios</Link>
                </li>
            </ul>
        </div>
    );
}

export default CategoryList;
