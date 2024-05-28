import { useCategories } from '../../contexts/CategoryContext';
import { Link } from 'react-router-dom';
import './CategoryDropdown.css';
import NavLinkWrapper from "../navLinkWrapper/NavLinkWrapper.jsx";

const CategoryDropdown = () => {
    const { categories } = useCategories();

    // console.log('Rendering CategoryDropdown with categories: ', categories);

    return (
        <NavLinkWrapper className="dropdown category-dropdown">
            <button className="btn dropdown-toggle category-dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
            </button>
            <ul className="dropdown-menu category-dropdown-menu" aria-labelledby="dropdownMenuButton">
                {categories.length > 0 ? (
                    categories.map(category => (
                        <li key={category.id}>
                            <Link className="dropdown-item category-dropdown-item" to={`/categories/${category.key}`}>
                                {category.description}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="dropdown-item category-dropdown-item">No hay categorías disponibles</li>
                )}
            </ul>
        </NavLinkWrapper>
    );
};

export default CategoryDropdown;
