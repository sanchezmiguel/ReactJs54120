function CategoryList() {
    return (
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='/comics-libros'>
                        Cómics y Libros
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/figuras-juguetes'>
                        Figuras y Juguetes
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/vestimenta'>
                        Vestimenta
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/decoracion'>
                        Decoración
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href='/accesorios'>
                        Accesorios
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CategoryList;
