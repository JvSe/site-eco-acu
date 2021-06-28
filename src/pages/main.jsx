import React from 'react';
import styles from '../styles/main.module.css';

import About from './About';
import Where from './Where';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Footer from './Footer';

/**
    import GenerateRect from '../components/genaratedRec/index';
 * 
    <GenerateRect birth={10} colors={['red', 'green', 'blue']}/>
 * 
 */



export default function Main() {
    return(
        <div className={styles.container}>
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="where">
                <Where />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}