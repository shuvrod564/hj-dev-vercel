'use client'
import React from 'react' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Gallery() {
    

    return (
        <>
           <Carousel className={"detail_page"}> 
                <img src="/images/global/plan--01.jpg" width={900} height={600} alt="image" />
                <img src="/images/global/plan--02.jpg" width={900} height={600} alt="image" />
                <img src="/images/global/plan--03.jpg" width={900} height={600} alt="image" />
                <img src="/images/global/plan--04.jpg" width={900} height={600} alt="image" />
           </Carousel> 
        </>
    )
}
