import React from 'react';
import styles from '../styles/components/Footer.module.scss';
import { useSelector } from 'react-redux';

import logoEco from '../assets/favicon.png';


export default function Footer() {
    const globalState = useSelector(state=>state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;

    return(
        <div className={styles.container}>
            <div style={{
                background: `linear-gradient(145deg,${theme.colorStart}, ${theme.colorEnd} )`
            }}>
                <img src={logoEco} alt="Logo Eco" />

            </div>
        </div>
    )
}