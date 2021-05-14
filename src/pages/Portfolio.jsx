import React from 'react';
import styles from '../styles/pages/Portfolio.module.scss';
import Rectangle from '../components/Rectangle';
import TextTitle from '../components/TextTitle';
import { useSelector } from 'react-redux';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import img1 from '../assets/img/1.jpeg';
import img2 from '../assets/img/2.jpeg';
import img3 from '../assets/img/3.jpeg';
import img4 from '../assets/img/4.jpeg';
import img5 from '../assets/img/5.jpeg';
import img6 from '../assets/img/6.jpeg';


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
            <Rectangle 
                width={window.screen.availWidth < 560 ? false : '60%'}
                height={window.screen.availWidth < 560 ? '50%' : '70%'}
                left={true}
                cor={'#fff'}
                pos={{'left':'0px', 'position':'absolute'}}
                style={{overflow:'hidden'}}
            > 


                {theme === 'turismo' ? 
                    <AwesomeSlider cssModule={AwesomeSliderStyles}>
                        <div data-src={img1} />
                        <div data-src={img2} />
                        <div data-src={img3} />
                        <div data-src={img4} />
                        <div data-src={img5} />
                        <div data-src={img6} />
                    </AwesomeSlider>
                :
                    <AwesomeSlider cssModule={AwesomeSliderStyles}>
                        <div data-src={img1} />
                        <div data-src={img1} />
                        <div data-src={img1} />
                        <div data-src={img1} />
                        <div data-src={img1} />
                        <div data-src={img1} />
                    </AwesomeSlider>
                }
                
            </Rectangle>
        </div>
    )
}