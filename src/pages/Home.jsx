import React from 'react';
import Rectangle from '../components/Rectangle';
import styles from '../styles/pages/Home.module.css';
import imgComputador from '../assets/computador.png';
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

  return(
    <div className={styles.container}>
        <div className={styles.containerRect}>
          <Rectangle 
            cor={{'gradient':true,'colorStart':theme.colorStart, 'colorEnd':theme.colorEnd}} 
            width='60%' 
            left
            height='75%' 
            pos={{'left':'-20px', 'position':'absolute'}}
          />
        </div>
      <Fade bottom cascade>
        <div className={styles.containerMid}>
          <img className={styles.img} src={imgComputador} alt="computador representando o sistema"/>
          <div>
            <button className={styles.btn} type="button" onClick={changeTurismo} > Turismo </button>
            <button className={styles.btn} type="button" onClick={changeGestao} > Gestao </button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

