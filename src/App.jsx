import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Hero2 from '../src/components/Hero2';
import Hero3 from '../src/components/Hero3';

function App() {
    return (
        <div>
            <Navbar />
            <div>
                <Hero />
                <div>
                    <Hero2 />
                </div>
                <div>
                    <Hero3 />
                </div>
            </div>
        </div>
    );
}

export default App;
