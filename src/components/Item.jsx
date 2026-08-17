export default function Item({ image, category, alt }) {
    return (
        <div className="Item">
            <img src={image} alt={alt} />
            <p>{category}</p>
        </div>
    )
}