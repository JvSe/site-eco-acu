import React from 'react';
import Forms from '../components/Forms';
import Rectangle from '../components/Rectangle';
import TextTitle from '../components/TextTitle';
import styles from '../styles/pages/Contact.module.css';
import { useSelector } from 'react-redux'

import { 
    FaFacebookF, 
    FaInstagram, 
    FaWhatsapp,
    FaPhone, 
    FaEnvelope
} from "react-icons/fa";

export default function Contact() {

    const globalState = useSelector(state=>state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;

    return(
        <div className={styles.container}>
            <Rectangle 
                cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
                width='45%'
                left={false}
                height='80%' 
                pos={{'right':'-20px', 'position':'absolute'}}
            >
                <div className={styles.containerInfos}>
                    <div className={styles.header}>
                        <TextTitle styles={{fontSize:'3rem'}} color={{'gradient':true, 'colorStart':themeText.colorStart, 'colorEnd':themeText.colorEnd}}>Contato</TextTitle>
                        <h1>[TEXTO PARA ALTERAR]</h1>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.infoContact}>
                            <FaPhone color='#fff' size={'30px'}/>
                            <p className={styles.text}>(63) 98403-3300</p>
                        </div>
                        <div className={styles.infoContact}>
                            <FaEnvelope color='#fff' size={'30px'}/>
                            <p className={styles.text}>atendimento.ecoacu@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <FaFacebookF color='#fff' size={'30px'}/>
                        <FaInstagram color='#fff' size={'30px'}/>
                        <FaWhatsapp color='#fff' size={'30px'}/>
                    </div>
                </div>
                
            </Rectangle>
            <Rectangle 
                width='60%'
                height='70%'
                left
                cor={'#fff'}
                pos={{'left':'50px', 'position':'absolute'}}
            > 
                <Forms />
            </Rectangle>
        </div>
    )
}