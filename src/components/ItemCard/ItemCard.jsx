import "./ItemCard.css";

function ItemCard({ item, handleCardClick }) {
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img onClick={() => {
        handleCardClick(item);
      }} className="card__img" src={ item.link || item.imageUrl } alt={item.name} />
    </li>
  );
}

export default ItemCard;
