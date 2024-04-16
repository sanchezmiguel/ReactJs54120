import React from 'react';
import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import logo from '../../images/logo.png';

const Navbar = () => {
    const logoStyle = {
        maxWidth: '150px',
        height: 'auto',
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href="/">
                <img alt='logo' src={logo} className='logo' style={logoStyle} />
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
                        <a className='nav-link' href='/new-arrivals'>
                            New Arrivals
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/best-sellers'>
                            Best Sellers
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/special-offers'>
                            Special Offers
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/electronics'>
                            Electronics
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/tech-accessories'>
                            Tech Accessories
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
