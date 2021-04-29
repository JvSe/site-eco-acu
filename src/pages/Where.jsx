import React from 'react';
import Rectangle from '../components/Rectangle';
import TextTitle from '../components/TextTitle';
import styles from '../styles/pages/Where.module.css';
import MapLocal from '../components/Map';
import { useSelector } from 'react-redux';

export default function Where() {
    const globalState = useSelector(state=>state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;

    return(
        <div className={styles.container}>
            <Rectangle 
                cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
                width='45%'
                left
                height='80%' 
                pos={{'left':'-20px', 'position':'absolute'}}
            >
                <TextTitle color={{'gradient':true, 'colorStart':themeText.colorStart, 'colorEnd':themeText.colorEnd}}>Onde Estamos</TextTitle>
            </Rectangle>

            <Rectangle 
                width='60%'
                height='60%'
                cor={'#fff'}
                pos={{'right':'50px', 'position':'absolute'}}
            > 
                <MapLocal />
            </Rectangle>
        </div>
    )
}