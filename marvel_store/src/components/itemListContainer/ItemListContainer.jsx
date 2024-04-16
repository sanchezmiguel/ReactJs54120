import './itemListContainer.css';

export const ItemListContainer = ({greeting}) => {
    return(
        <div className="item-container">
            <h1>{greeting}</h1>
        </div>
    )
}
