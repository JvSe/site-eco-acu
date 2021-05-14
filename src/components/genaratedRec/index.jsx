import React, { useEffect, useState } from 'react';
import './index.css'

/**
 * 
 * colors: [];
 * shadow: [];
 * z-indez: boolean;
 * birth: number;
 * 
 */
export default function GenerateRect(props) {


    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll('.rect').forEach(layer => {
            const speed = layer.getAttribute('data-speed')
    
            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100
    
            layer.style.transform = `translateX(${x}px) translateY(${y}px) rotate(45deg)`
        })
    }
    
    var postop = 0;
    var posleft = 0;
    var cor = '';
    var listLimpTop = []
    var listLimpLeft = []
    const listRects = []

    for(let i=1; i < props.birth; i++) {
        listRects.push(i);
    }

    const colors = props.colors;
    const birth = 1;
    const tamanhos = ['70px'];
    const zindex = ['-1', '20'];
    
    //console.log(Math.floor(Math.random() * (birth - 0)) + 0);
    return(
        <>
            {listRects.map((rects, index) => 
                {
                    var auxPosTop = (Math.floor(Math.random() * (window.screen.height - 0) + 0));
                    var auxPosLeft = (Math.floor(Math.random() * (window.screen.width - 0) + 0));
                    var auxCor = (Math.floor(Math.random() * (colors.length - 0) + 0));
                    var auxTam = (Math.floor(Math.random() * (tamanhos.length - 0) + 0));
                    var auxIndex = (Math.floor(Math.random() * (2 - 0) + 0))

                    if (!listLimpTop.includes(auxPosTop)) {
                        console.log(auxPosTop)
                        postop = auxPosTop;
                        listLimpTop.push(auxPosTop);
                    }

                    if (!listLimpLeft.includes(auxPosLeft)) {
                        posleft = auxPosLeft;
                        listLimpLeft.push(auxPosLeft)
                    }

                    return <div key={index} 
                            className="rect"
                            data-speed={5}
                            style={{
                                width: tamanhos[auxTam],
                                height:tamanhos[auxTam],
                                borderColor: `${colors[auxCor]}`,
                                zIndex: zindex[auxIndex],
                                top: `${postop}px`,
                                left: `${posleft}px`
                            }}
                            ></div>
                }
            )}
        </>
    )
}