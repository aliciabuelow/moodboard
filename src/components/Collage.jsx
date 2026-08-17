import Item from "./Item";
import items from "../data/items";

export default function Collage() {
    return (
        <div className="Collage">
            {items.map((item, i) => {
                return <Item key={i} image={item.image} category={item.category} alt={item.alt} />;
            })}
        </div>
    )
}