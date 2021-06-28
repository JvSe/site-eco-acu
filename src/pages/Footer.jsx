import React from 'react';
import styles from '../styles/components/Footer.module.scss';
import { useSelector } from 'react-redux';

import logoEco from '../assets/favicon.png';
import nomeLogo from '../assets/nomeEco.png';
import nomeTec from '../assets/nomeTec.png';

import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    const globalState = useSelector(state=>state);
    var theme = globalState.theme;
    var themeText = globalState.themeText;

    return(
        <div className={styles.container}>
            <div className={styles.containerRectangle} style={{
                background: `linear-gradient(145deg,${theme.colorStart}, ${theme.colorEnd} )`,
                flexDirection:'column',
                justifyContent:'space-around'
                
            }}>
                <div 
                    style={{
                        display: 'flex',
                        alignItems:'center',
                        flexDirection:'column',
                        gap:'1.5rem'
                    }}
                >
                    <img 
                        style={{
                            width: '9rem'
                        }}
                        src={logoEco} alt="Logo Eco" />
                    <img 
                        style={{
                            width: '15rem'
                        }}
                        src={nomeLogo} 
                        alt="Nome Logo" 
                    />
                    <img 
                        style={{
                            width: '9rem'
                        }}
                        src={nomeTec} 
                        alt="Nome Tecnologica" 
                    />

                </div>

                <div 
                    onClick={() => window.open('https://www.google.com/maps?q=-10.1824598,-48.3387675&z=17&hl=pt-BR')}
                    style={{
                        display: 'flex',
                        alignItems:'center',
                        gap: '.3rem'
                    }}
                >
                    <FaMapMarkerAlt size={25} color="#fff"/>
                    <p style={{fontSize:'2rem'}}>103 norte rua NO 03 lote 15 A casa 10</p>

                </div>

                <span
                    className={styles.containerWhats}
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=5563984033300')}
                    style={{
                        
                    }}
                >
                    <p style={{fontSize:'2rem', textAlign:'center'}}>Valdecir Guedes Mazeiro <br></br> (63) 98403-3300</p>
                </span>
                
                
                <p style={{fontSize:'1.2rem'}}>© 2021 Ecó Açu Tecnologia Eireli. Todos os direitos reservados </p>

            </div>
        </div>
    )
}