import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Hero2 from '../src/components/Hero2';
import Hero3 from '../src/components/Hero3';
import Footer from '../src/components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <hr />
            <Hero />
            <hr />
            <Hero2 />
            <hr />
            <Hero3 />
            <hr />
            <Footer />
        </div>
    );
}

export default App;
