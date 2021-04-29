import React from 'react';
import styles from '../styles/components/NavBar.module.css';
import { useSelector } from 'react-redux';

import imgYellow from '../assets/logoYellow.png';
import imgBlue from '../assets/logoBlue.png';

export default function NavBar(props) {
    const globalState = useSelector(state => state);
    const theme = globalState.theme;

    window.addEventListener('scroll', () => {
        const container = document.getElementById('nav');
        container.classList.toggle(styles.containerScroll, window.scrollY > 0);
    })
    return (
        <div id="nav" className={styles.container}>
            <img className={styles.img} src={theme.type == 'turismo' ? imgYellow : imgBlue} alt="Logo navegação home"/>

            <nav className={styles.nav}>
                {props.linksNav.map((link, index) => {
                    return (
                        <a className={styles.links} style={{color:theme.colorStart}} key={index} href={`#${link.id}`}>{link.nome}</a>
                    )
                })}
            </nav>
        </div>
    )
}