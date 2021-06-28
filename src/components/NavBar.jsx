import React, { useState } from 'react';
import styles from '../styles/components/NavBar.module.scss';
import { useSelector } from 'react-redux';

import imgYellow from '../assets/logoYellow.png';
import imgBlue from '../assets/logoBlue.png';

import imgPadrao from '../assets/logoPadrao.png';

export default function NavBar(props) {
    const [menuPressed, setMenu] = useState(false);
    const globalState = useSelector(state => state);
    const theme = globalState.theme;

    window.addEventListener('scroll', () => {
        const container = document.getElementById('nav');
        container.classList.toggle(styles.containerScroll, window.scrollY > 0);
    })

    function menuToggle() {
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        const menuHamburger = document.getElementById('menu')
        const imgMenu = document.getElementById('img');

        if(!menuPressed){
            imgMenu.style.opacity='0';
            imgMenu.style.transitionDelay='500ms';
            menuHamburger.style.right='0px'
            menuHamburger.style.transitionDuration='700ms'
            bar1.style.transform = 'rotate(45deg) translateY(12px) translateX(5px)';
            bar2.style.opacity='0';
            bar3.style.transform = 'rotate(-45deg) translateY(-12px) translateX(5px)';
            setMenu(true);
        } else {
            imgMenu.style.opacity='1';
            imgMenu.style.transitionDelay='300ms'
            menuHamburger.style.right='-1920px'
            menuHamburger.style.transitionDuration='700ms'
            bar1.style.transform = 'rotate(0)';
            bar2.style.opacity='1';
            bar3.style.transform = 'rotate(0)';
            setMenu(false);
        }
    }


    return (
        <>
            <div id="nav" className={styles.container}>
                <img id="img" className={styles.img} src={imgPadrao} alt="Logo navegação home"/>
                <nav className={styles.nav}>
                    {props.linksNav.map((link, index) => {
                        return (
                            <a className={styles.links} style={{color:theme.colorStart}} key={index} href={`#${link.id}`}>{link.nome}</a>
                        )
                    })}
                </nav>

                <div  onClick={() => menuToggle()} className={styles.menuHamburger}>
                    <span id="bar1" style={{backgroundColor:theme.colorStart}}></span>
                    <span id="bar2" style={{backgroundColor:theme.colorStart}}></span>
                    <span id="bar3" style={{backgroundColor:theme.colorStart}}></span>
                </div>
            </div>

                <div id="menu" className={styles.containerMenuHamburger}>
                    <div>
                        {props.linksNav.map((link, index) => {
                            return (
                                <li key={index} >
                                    <a id={`title${index}`} onClick={menuToggle} href={`#${link.id}`}>{link.nome}</a>
                                </li>
                            )
                        })}
                    </div>
                    
                </div>
            
        </>
    )
}