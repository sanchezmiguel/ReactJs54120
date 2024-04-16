import React from 'react';
import logo from '../../images/logo.png';
import CartWidget from '../cartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href="/">
                <img alt='logo' src={logo} className='logo' style={{ maxWidth: '150px', height: 'auto' }} />
            </a>

            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
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
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
};

export default Navbar;
