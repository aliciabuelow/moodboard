import '../styles/Categories.css';

export default function Categories({ setCategory }) {
    return (
        <div className="Categories">
            <button 
                className="category-all"
                onClick={() => setCategory('all')}
            >
                All
            </button>
            <button 
                className="category-design"
                onClick={() => setCategory('design')}
            >
                Design
            </button>
            <button 
                className="category-home"
                onClick={() => setCategory('home')}
            >
                Home
            </button>
            <button 
                className="category-art"
                onClick={() => setCategory('art')}
            >
                Art
            </button>
            <button 
                className="category-dev"
                onClick={() => setCategory('development')}
            >
                Development
            </button>
            <button 
                className="category-photo"
                onClick={() => setCategory('photography')}
            >
                Photography
            </button>
            <button 
                className="category-fashion"
                onClick={() => setCategory('fashion')}
            >
                Fashion
            </button>
        </div>
    )
}