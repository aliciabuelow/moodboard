import '../styles/Categories.css';

export default function Categories({ setCategory }) {
    return (
        <div className="Categories">
            <button 
                className="category-btn cat-all"
                onClick={() => setCategory('all')}
            >
                All Items
            </button>
            <button 
                className="category-btn cat-visuals"
                onClick={() => setCategory('visuals')}
            >
                Visuals
            </button>
            <button 
                className="category-btn cat-home"
                onClick={() => setCategory('home')}
            >
                Interior Design
            </button>
            <button 
                className="category-btn cat-art"
                onClick={() => setCategory('art')}
            >
                Artwork
            </button>
            <button 
                className="category-btn cat-dev"
                onClick={() => setCategory('development')}
            >
                Development
            </button>
            <button 
                className="category-btn cat-photo"
                onClick={() => setCategory('photography')}
            >
                Photography
            </button>
            <button 
                className="category-btn cat-fashion"
                onClick={() => setCategory('fashion')}
            >
                Fashion
            </button>
        </div>
    )
}