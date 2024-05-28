import { useCategories } from '../../contexts/CategoryContext';
import { Link } from 'react-router-dom';
import './CategoryDropdown.css';

const CategoryDropdown = () => {
    const { categories } = useCategories();

    console.log('Rendering CategoryDropdown with categories: ', categories);

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {categories.length > 0 ? (
                    categories.map(category => (
                        <li key={category.id}>
                            <Link className="dropdown-item" to={`/categories/${category.key}`}>
                                {category.description}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="dropdown-item">No hay categorías disponibles</li>
                )}
            </ul>
        </div>
    );
};

export default CategoryDropdown;
