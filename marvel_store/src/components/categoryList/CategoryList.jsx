function CategoryList() {
    return (
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
    );
}

export default CategoryList;
