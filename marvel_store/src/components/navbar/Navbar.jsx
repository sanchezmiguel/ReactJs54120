import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark'>
            <a className='navbar-brand' href="/">
                <img alt='logo' src={logo} className='logo' />
            </a>

            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/productos'>
                            Productos
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/personajes'>
                            Personajes
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/peliculas-series'>
                            Películas y Series
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/noticias'>
                            Noticias y Eventos
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/comunidad'>
                            Comunidad
                        </a>
                    </li>
                    {/* Add more relevant links for your e-commerce site */}
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
};

export default Navbar;
