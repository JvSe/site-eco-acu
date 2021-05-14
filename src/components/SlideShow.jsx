import React, {useState, useCallback} from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from '../styles/components/SlideShow.module.scss';
import Fade from 'react-reveal/Fade';

import img1 from '../assets/img/1.jpeg';
import img2 from '../assets/img/2.jpeg';
import img3 from '../assets/img/3.jpeg';
import img4 from '../assets/img/4.jpeg';
import img5 from '../assets/img/5.jpeg';
import img6 from '../assets/img/6.jpeg';

const photos = [
  {
    src: img1,
    width: 3,
    height: 2
  },
  {
    src: img2,
    width: 3,
    height: 2
  },
  {
    src: img3,
    width: 3,
    height: 2
  },
  {
    src: img4,
    width: 3,
    height: 2
  },
  {
    src: img5,
    width: 3,
    height: 2
  },
  {
    src: img6,
    width: 3,
    height: 2
  },
];


export default function SlideShow() {
  return(
    <div>
      eae
    </div>
  )
}