import React from 'react';
import styles from '../styles/components/Rectangle.module.css';
import Fade from 'react-reveal/Fade';

export default function Rectangle( props ) {
    const shadow =  "15px 3px 20px 0px rgba(0,0,0,0.2)"
    const shadowLeft =  "-15px 3px 20px 0px rgba(0,0,0,0.2)"

    return(
        <>
        {props.left ? 
            <Fade left>
            <div 
                className={styles.container} 
                style={
                    {
                        ...props.style,
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        background: typeof (props.cor) === 'string' ? props.cor :
                            props.cor.gradient && props.left ? 
                            `linear-gradient(145deg,${props.cor.colorStart}, ${props.cor.colorEnd} )` : 
                            props.cor.gradient && props.left === false ? `linear-gradient(-145deg,${props.cor.colorStart}, ${props.cor.colorEnd} )` : 
                            'auto',
                        //backgroundColor:props.cor ? props.cor : '#fff',
                        width:props.width ? props.width :'100%',
                        height:props.height ? props.height :'100%',
                        boxShadow: props.left ? shadow : shadowLeft,
                        WebkitBoxShadow: props.left ? shadow : shadowLeft,
                        MozBoxShadow: props.left ? shadow : shadowLeft,
                        position: props.pos.position ? props.pos.position : 'auto',
                        left: props.pos.left ? props.pos.left : 'auto',
                        right: props.pos.right ? props.pos.right : 'auto',
                    }
                }> 
                    {props.children}
            </div>
        </Fade> : 
        
        <Fade right>
            <div 
                className={styles.container} 
                style={
                    {
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        background: typeof (props.cor) === 'string' ? props.cor :
                            props.cor.gradient && props.left ? 
                            `linear-gradient(145deg,${props.cor.colorStart}, ${props.cor.colorEnd} )` : 
                            props.cor.gradient && props.left === false ? `linear-gradient(-145deg,${props.cor.colorStart}, ${props.cor.colorEnd} )` : 
                            'auto',
                        //backgroundColor:props.cor ? props.cor : '#fff',
                        width:props.width ? props.width :'100%',
                        height:props.height ? props.height :'100%',
                        boxShadow: props.left ? shadow : shadowLeft,
                        WebkitBoxShadow: props.left ? shadow : shadowLeft,
                        MozBoxShadow: props.left ? shadow : shadowLeft,
                        position: props.pos.position ? props.pos.position : 'auto',
                        left: props.pos.left ? props.pos.left : 'auto',
                        right: props.pos.right ? props.pos.right : 'auto',
                    }
                }> 
                    {props.children}
            </div>
        </Fade> }
        
        </>
    )
}