// ItemList.jsx
import Item from "../item/Item.jsx";

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

export default ItemList;
