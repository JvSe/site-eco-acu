import React from 'react';
import styles from '../styles/pages/Portfolio.module.css';
import Rectangle from '../components/Rectangle';
import TextTitle from '../components/TextTitle';
import { useSelector } from 'react-redux';

export default function Portfolio() {

    const globalState = useSelector(state=>state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;

    return(
        <div className={styles.container}>
            <div className={styles.containerRectangle}>
                <Rectangle 
                    cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
                    width='45%'
                    left={false}
                    height='80%' 
                    pos={{'right':'-20px', 'position':'absolute'}}
                >
                    <TextTitle color={{'gradient':true, 'colorStart':themeText.colorStart, 'colorEnd':themeText.colorEnd}}>Portfólio</TextTitle>
                </Rectangle>
            </div>
            <div className={styles.containerSlide}>
                
            </div>
        </div>
    )
}