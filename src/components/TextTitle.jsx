import React from 'react';
import styles from '../styles/components/TextTitle.module.scss';

export default function TextTitle(props) {
    const tela = window.screen.availWidth;

    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll('.layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed')
    
            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100
    
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }
    
    var text = props.children;
    var text2 = text.split(' ');
    var text3 = "";
    text3.concat(text2[0], text2[1]);
    return (
        <div style={props.styles}>
            {text2.length > 1 ?
                tela > 700 ? 
                <>
                    <h1 className="title layer"
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
                    <h1 className="title layer"
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
                    data-speed={1}
                    > 
                        {text2[1]} 
                    </h1>
                </> : 
                <> 
                    <h1 
                        className="title layer"
                        data-speed={1}
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
                        {text2[0] + ' ' + text2[1]} 
                    </h1>
                    
                </> :
                <>
                    <h1 
                        className="title layer"
                        data-speed={1}
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
                </>
            }
            
        </div>
    )
}