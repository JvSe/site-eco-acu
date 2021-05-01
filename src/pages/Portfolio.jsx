import React from 'react';
import styles from '../styles/pages/Portfolio.module.scss';
import Rectangle from '../components/Rectangle';
import TextTitle from '../components/TextTitle';
import { useSelector } from 'react-redux';
import SlideShow from '../components/SlideShow';

export default function Portfolio() {

    const globalState = useSelector(state=>state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;

    return(
        <div className={styles.container}>
            <div className={styles.containerRectangle}>
                <Rectangle 
                    cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
                    width={window.screen.availWidth < 560 ? false :'45%'}
                    left={false}
                    height='80%' 
                    pos={{'right':'-20px', 'position':'absolute'}}
                >
                    <div className={styles.textTitle}>
                        <TextTitle color={{'gradient':true, 'colorStart':themeText.colorStart, 'colorEnd':themeText.colorEnd}}>Portfólio</TextTitle>
                    </div>
                </Rectangle>
            </div>
            <div className={styles.containerSlide}>
                <SlideShow />
            </div>
        </div>
    )
}