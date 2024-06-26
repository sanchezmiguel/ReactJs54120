/**
 * @file NavbarToggler.jsx
 * @description Componente para el botón de toggle en la barra de navegación.
 */

const NavbarToggler = () => {
    return (
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
    );
};

export default NavbarToggler;
