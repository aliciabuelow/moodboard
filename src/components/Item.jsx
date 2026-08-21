import '../styles/Item.css';

export default function Item({ image, category, alt }) {
    return (
        <div className="Item">
            <img src={image} alt={alt} />
            <p className="category-label">{category}</p>
        </div>
    )
}