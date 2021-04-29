import React from 'react';
import Rectangle from '../components/Rectangle';
import TextTitle from '../components/TextTitle';
import styles from '../styles/pages/About.module.css';
import { useSelector } from 'react-redux';

export default function About() {
    const globalState = useSelector(state => state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;

    return(
        <div className={styles.container}>
            
            <div className={styles.containerRectangle}>
                
                <Rectangle 
                    cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
                    width='45%'
                    left
                    height='80%' 
                    pos={{'left':'-20px', 'position':'absolute'}}
                >
                    <TextTitle 
                        color={{'gradient':true, 'colorStart':themeText.colorStart, 'colorEnd':themeText.colorEnd}}
                    >SOBRE NÓS</TextTitle>
                </Rectangle>
                
                
            </div>
            
            
            <div className={styles.containerText}>
                <p className={styles.text}>
                    A ECÓ AÇU é uma empresa de soluções
                    tecnologicas totalmente brasileira.
                    Somos especialistas em todas as
                    particularidades do desenvolvimento
                    de software.

                <br/><br/>

                    Temos como missão oferecer serviços
                    e soluções customizados,
                    de alta qualidade e excelência,
                    concretizando o retorno do
                    investimento de nossos clientes.
                
                <br/><br/>
            
                    E por fim, temos a visão de ser uma
                    empresa sólida e inovadora,
                    que proporciona qualidade de vida e
                    promova a transformação da sociedade a
                    partir de novas tecnologias.
                </p>
               
            </div>
        </div>
    )
}