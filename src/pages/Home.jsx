import React from 'react';
import Rectangle from '../components/Rectangle';
import styles from '../styles/pages/Home.module.scss';
import imgComputadorTurismo from '../assets/computadorTurismo.png';
import imgComputadorGestao from '../assets/computadorGestao.png';
import Fade from 'react-reveal/Fade';

import { useSelector, useDispatch} from 'react-redux';

export default function Home() {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();
  var theme = globalState.theme;

  function changeTheme(valor) {
    const theme = new Promise((resolve, reject) => {
      try {
        dispatch({type:valor});
        resolve(true);
      } catch (e) {
        reject('erro')
      }
    })

    return theme;
  }
  

  const changeGestao = () => {
   //dispatch({type:"THEME_GESTAO"});
    changeTheme('THEME_GESTAO')
    .then(() => window.location.reload());
  }

  const changeTurismo = () => {
    changeTheme('THEME_TURISMO')
    .then(() => window.location.reload());
  }

  const rectLeft = {
    'left':'-20px',
    'position':'absolute',
  }

  const rectRight = {
    'right':'-20px',
    'position':'absolute',
  }

  return(
    <div className={styles.container}>
        <div className={styles.containerRect}>
          <Rectangle 
            cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
            width={window.screen.availWidth < 560 ? false : '60%'} 
            left={theme.type ===  "turismo" ? true : false}
            height='75%' 
            pos={theme.type ===  "turismo" ? rectLeft : rectRight}
          />
        </div>
      <Fade bottom cascade>
        <div className={styles.containerMid}>
          {theme.type === "turismo" ? 
            <img className={styles.img} src={imgComputadorTurismo} alt="computador representando o sistema"/>
            : 
            <img className={styles.img} style={{marginLeft:0}} src={imgComputadorGestao} alt="computador representando o sistema"/>
          }
          <div>
            <button className={styles.btn} type="button" onClick={changeTurismo} > Turismo </button>
            <button className={styles.btn} type="button" onClick={changeGestao} > Gestao </button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

