import React, { useRef, useState } from 'react';
import s from './Carousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';
import { Hidden } from '@mui/material';

const Carousel = (props) => {
    const [currentIndex, setIndex] = useState(0);
    const sliderRef = useRef();
    const amountOfSlides = 100 / (props.img.length);

    const [translate, setTranslate] = useState(0);

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
        setIndex(index);
        setTranslate(index * 5);
    }


    if (props.img.length === 1) {
        return (

            <img src={props.img[0]} alt="carousel" />

        );
    } else {
        var settings = {
            dots: true,
            infinite: false,
            speed: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            appendDots: dots => (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '16px',
                        gap: '4px',
                        left: '50%',
                        width: '24px',
                        overflow: 'hidden',
                        transform: 'translateX(-50%)',
                      
                 
                    }}

                >
                    <ul style={{
                        display: 'flex',   alignItems: 'center',
                        gap: '4px', transform: `translateX(-${translate}px)`, transition: '0.2s ease-out',
                    }}>
                        {props.img.map((item, index) => (
                            <li

                                className={currentIndex === index ? 'slick-active' : ''}
                                key={index}>
                            </li>
                        ))}
                    </ul>
                </div>
            ),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {

                        dots: false
                    }
                },
            ]
            // appendDots: dots => (
            //     <div
            //         style={{
            //             position: 'absolute',
            //             bottom: '16px',
            //             gap: '4px',
            //             left: '50%',
            //             width: '24px',
            //             overflow: 'hidden',
            //             transform: 'translateX(-50%)'
            //         }}

            //     >
            //         <ul style={{
            //             display: 'flex', height: '6px', alignItems: 'center',
            //             gap: '4px', transform: `translateX(-${translate}px)`, transition: '0.2s ease-out',
            //         }}>
            //             {props.img.map((item, index) => (
            //                 <li

            //                     className={currentIndex === index ? 'slick-active' : ''}
            //                     key={index}>
            //                     {/* <button></button> */}
            //                 </li>
            //             ))}
            //         </ul>
            //     </div>
            // ),
            // responsive: [
            //     {
            //         breakpoint: 1024,
            //         settings: {

            //             dots: false
            //         }
            //     },
            // ]
        };
        return (
            <div style={{ height: '100%' }}>
                <Slider ref={sliderRef} {...settings}>
                    {(props.img).map((item, index) => (
                        <div key={index}><img src={item} alt="" /></div>
                    ))}

                </Slider>
                <div style={{ display: window.innerWidth > 1023 ? 'flex' : 'none' }} className={s.sliderThumbnails}>
                    {props.img.map((item, index) => (
                        <div style={{ flex: `${amountOfSlides}%` }}
                            key={index}
                            className={s.imagethumbnail}
                            onMouseEnter={() => goToSlide(index)}>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default Carousel;