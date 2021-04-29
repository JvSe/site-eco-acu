import React from 'react';
import styles from '../styles/components/TextTitle.module.css';

export default function TextTitle(props) {
    
    var text = props.children;
    var text2 = text.split(' ');
    return (
        <div style={props.styles}>
            {text2.length > 1 ?
                <>
                    <h1 className={styles.title}
                        style={
                            props.color.gradient ? 
                            {
                                width:'110%',
                                background: `linear-gradient(145deg, ${props.color.colorStart}, ${props.color.colorEnd})`,
                                WebkitBackgroundClip: 'text',
                                color: props.color ? props.color : 'inherit',
                            } :

                            {
                                color: props.color
                            }
                        }
                        data-speed={1}> {text2[0]} </h1>
                    <h1 className={styles.title}
                    style={
                        props.color.gradient ? 
                        {
                            width:'110%',
                            background: `linear-gradient(145deg, ${props.color.colorStart}, ${props.color.colorEnd})`,
                            WebkitBackgroundClip: 'text',
                            color: props.color ? props.color : 'inherit',
                        } :

                        {
                            color: props.color
                        }
                    }
                    data-speed={3}
                    > 
                        {text2[1]} 
                    </h1>
                    <h1 className={styles.titleOutline} style={{marginTop:'-180px'}} data-speed={4}> {text2[0]} </h1>
                    <h1 className={styles.titleOutline}> {text2[1]} </h1>
                </> :
                <>
                    <h1 
                        className={styles.title} 
                        style={
                            props.color.gradient ? 
                            {
                                width:'110%',
                                background: `linear-gradient(145deg, ${props.color.colorStart}, ${props.color.colorEnd})`,
                                WebkitBackgroundClip: 'text',
                                color: props.color ? props.color : 'inherit',
                            } :

                            {
                                color: props.color
                            }
                        }
                    > 
                        {text2[0]} 
                    </h1>
                    <h1 className={styles.titleOutline} style={{marginTop:'-90px'}}> {text2[0]} </h1>
                </>
            }
            
        </div>
    )
}