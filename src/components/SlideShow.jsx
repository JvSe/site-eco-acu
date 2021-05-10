import React, {useState, useCallback} from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from '../styles/components/SlideShow.module.scss'

const photos = [
  {
    src: 'https://i.pinimg.com/originals/fd/8f/8d/fd8f8da060afe72035e078e5fe661452.png',
    width: 4,
    height: 3
  },
  {
    src: 'https://wallpapercave.com/wp/wp1933957.png',
    width: 2,
    height: 1
  },
  {
    src: 'https://i.pinimg.com/originals/fd/8f/8d/fd8f8da060afe72035e078e5fe661452.png',
    width: 4,
    height: 3
  },
  {
    src: 'https://wallpapercave.com/wp/wp1933957.png',
    width: 2,
    height: 1
  },
  {
    src: 'https://i.pinimg.com/originals/fd/8f/8d/fd8f8da060afe72035e078e5fe661452.png',
    width: 4,
    height: 3
  },
  {
    src: 'https://wallpapercave.com/wp/wp1933957.png',
    width: 2,
    height: 1
  },
  {
    src: 'https://i.pinimg.com/originals/fd/8f/8d/fd8f8da060afe72035e078e5fe661452.png',
    width: 4,
    height: 3
  },
  {
    src: 'https://wallpapercave.com/wp/wp1933957.png',
    width: 2,
    height: 1
  },
];

const customStyles = {
  view: () => ({
    // none of react-images styles are passed to <View />
    zIndex: 1000000
  }),
}


export default function SlideShow() {
  
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  
  return(
    <div className={styles.containerSlide}>
      <Gallery photos={photos} onClick={openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}