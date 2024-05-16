import React, { useRef, useState } from 'react';
import s from './Carousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';


const Carousel = (props) => {
    const [currentIndex, setIndex] = useState(0);
    const sliderRef = useRef();
const dotsRef = useRef();
    const amountOfSlides = Math.ceil(100 / (props.img.length));


    const [translate, setTranslate] = useState(0);

    const goToSlide = (index) => {
        if (dotsRef.current) {
            dotsRef.current.style.opacity = '1';
        }
       
        sliderRef.current.slickGoTo(index);
        
        setIndex(index);
        if (index === 1) {
            setTranslate(0);
        } else if (index === props.img.length - 2 || index === props.img.length - 1) {
            setTranslate((props.img.length - 3) * 8);
        } else {
            setTranslate((index - 1) * 8);
        }
    }

    const handleMouseLeave = () => {
        if (dotsRef.current) {
            dotsRef.current.style.opacity = '0';
        }
    }

    if (props.img.length === 1) {
        return (

            <img   className='sliderImage' src={props.img[0]} alt="carousel" />

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
                <div ref={dotsRef}
                    style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '50%',
                        width: '24px',
                        overflow: 'hidden',
                        transform: 'translateX(-50%)',
                        padding: '0 1px',

                        transition: '0.2s ease-out'

                    }}

                >
                    <ul style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '6px',
                        width: 'fit-content',
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
                    breakpoint: 1023,
                    settings: {
                        speed: 500,
                        dots: false
                    }
                },
            ]
        };
        return (
            <div style={{ height: '100%' }}>
           
                <Slider ref={sliderRef} {...settings}>
                    {(props.img).map((item, index) => (
                        <div key={index}><img className='sliderImage' src={item} alt="" /></div>
                    ))}

                </Slider>
                <div style={{ display: window.innerWidth > 1023 ? 'flex' : 'none' }} className='sliderThumbnails'>
                    {props.img.map((item, index) => (
                        <div style={{ flex: `${amountOfSlides}%` }}
                            key={index}
                            className={s.imagethumbnail}
                            onMouseEnter={() => goToSlide(index)}
                            onMouseLeave={() => handleMouseLeave()}>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default Carousel;