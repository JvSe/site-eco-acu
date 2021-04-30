import React, { useRef } from 'react';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default'
import { CustomGallery, DefaultLayout } from 'react-photoswipe-gallery'

const MyGallery = () => {
    const layoutRef = useRef()
    return (
        <>
            <CustomGallery layoutRef={layoutRef} ui={PhotoswipeUIDefault}>
                {/*...*/}
            </CustomGallery>

            <CustomGallery layoutRef={layoutRef} ui={PhotoswipeUIDefault}>
                {/*...*/}
            </CustomGallery>

            <DefaultLayout
                shareButton={false}
                fullscreenButton={false}
                zoomButton={false}
                ref={layoutRef}
            />
        </>
    )
}

export default MyGallery;