// ItemDetail.jsx
import ItemCount from "../itemCount/ItemCount.jsx";


function ItemDetail({ item, onAdd }) {
    const handleAddToCart = (quantity) => {
        console.log(`Adding ${quantity} of ${item.name} to the cart`);
        // Aquí puedes agregar lógica para añadir realmente al carrito
    };

    return (
        <div className="item-detail">
            <h2>{item.name}</h2>
            <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: 'auto' }} />
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            <ItemCount stock={item.stock} initial={item.initial} onAdd={onAdd} />
        </div>
    );
}

export default ItemDetail;
