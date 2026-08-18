import Item from "./Item";
import items from "../data/items";
import '../styles/Collage.css';

export default function Collage() {
    return (
        <div className="Collage">
            <div className="grid-container">
                {items.map((item, i) => {
                    return (
                        <div className="grid-item" key={i}>
                            <Item image={item.image} category={item.category} alt={item.alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}