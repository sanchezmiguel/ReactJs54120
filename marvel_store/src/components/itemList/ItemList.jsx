import PropTypes from 'prop-types';
import Item from "../item/Item.jsx";
import { Link } from 'react-router-dom';
import './ItemList.css';

function ItemList({ items, onAdd }) {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Link to={`/item/${item.id}`}>
                        <Item item={item} onAdd={onAdd} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })).isRequired,
    onAdd: PropTypes.func.isRequired
};

export default ItemList;

