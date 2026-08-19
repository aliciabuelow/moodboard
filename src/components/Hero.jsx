import '../styles/Hero.css';
import Categories from './Categories.jsx';

export default function Hero({ setCategory }) {
    return (
        <div className="Hero">
            <h1 className="title">
                <div className="letter-one">M</div>
                <div className="letter-two">O</div>
                <div className="letter-three">O</div>
                <div className="letter-four">D</div>
            </h1>
        
            <h2 className="subtitle">A curated collection of digital artifacts, representive of my personal taste, style, and interests.</h2>

            <Categories setCategory={setCategory} />
        </div>
    )
}