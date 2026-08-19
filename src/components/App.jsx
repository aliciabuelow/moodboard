import { useState } from 'react';
import '../styles/App.css';
import Hero from './Hero.jsx';
import Collage from './Collage.jsx';
import Footer from './Footer.jsx';

export default function App() {
    const [category, setCategory] = useState('all');

    return (
        <div className="App">
            <Hero setCategory={setCategory} />
            <Collage category={category} />
            <Footer />
        </div>
    )
};