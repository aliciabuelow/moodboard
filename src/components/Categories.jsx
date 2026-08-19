export default function Categories({ setCategory }) {
    return (
        <div className="Categories">
            <button 
                className="category-btn"
                onClick={() => setCategory('all')}
            >
                All
            </button>
            <button 
                className="category-btn"
                onClick={() => setCategory('design')}
            >
                Design
            </button>
            <button 
                className="category-btn"
                onClick={() => setCategory('home')}
            >
                Home
            </button>
            <button 
                className="category-btn"
                onClick={() => setCategory('art')}
            >
                Art
            </button>
            <button 
                className="category-btn"
                onClick={() => setCategory('development')}
            >
                Development
            </button>
            <button 
                className="category-btn"
                onClick={() => setCategory('photography')}
            >
                Photography
            </button>
            <button 
                className="category-btn"
                onClick={() => setCategory('fashion')}
            >
                Fashion
            </button>
        </div>
    )
}