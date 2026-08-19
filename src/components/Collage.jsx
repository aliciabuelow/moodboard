import Item from "./Item";
import items from "../data/items";
import '../styles/Collage.css';

export default function Collage({ category }) {
    const filteredItems = category === 'all' ? items : items.filter(item => item.category === category);

    return (
        <div className="Collage">
            <div className="grid-container">
                {filteredItems.map((item, i) => {
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