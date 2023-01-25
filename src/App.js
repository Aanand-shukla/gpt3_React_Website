import React from 'react';
import { Brand, Cta, Navbar } from './component';
import { Footer, Blog, Possibility, Features, Header, Whatgpt3 } from './container';
import './App.css';
import './index.css';

const App = () => {
    return (
        <div className='App' >
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatgpt3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App 
