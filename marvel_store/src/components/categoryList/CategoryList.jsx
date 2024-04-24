import CategoryLink from "../categoryLink/CategoryLink.jsx";


function CategoryList() {
    return (
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
                <CategoryLink to='/category/comics-libros'>Cómics y Libros</CategoryLink>
                <CategoryLink to='/category/figuras-juguetes'>Figuras y Juguetes</CategoryLink>
                <CategoryLink to='/category/vestimenta'>Vestimenta</CategoryLink>
                <CategoryLink to='/category/decoracion'>Decoración</CategoryLink>
                <CategoryLink to='/category/accesorios'>Accesorios</CategoryLink>
            </ul>
        </div>
    );
}

export default CategoryList;
