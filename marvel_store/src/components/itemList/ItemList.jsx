// ItemList.jsx
import PropTypes from 'prop-types';
import Item from "../item/Item.jsx";
import './ItemList.css'

function ItemList({items, onAdd, onSelectItem}) {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Item item={item} onAdd={onAdd} onSelectItem={onSelectItem}/>
                </div>
            ))}
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })).isRequired,
    onAdd: PropTypes.func.isRequired,
    onSelectItem: PropTypes.func.isRequired
};

export default ItemList;
