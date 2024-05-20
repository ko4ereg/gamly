import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './Carousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';


const Carousel = (props) => {

    const [currentIndex, setIndex] = useState(0);
    const sliderRef = useRef();
    const dotsRef = useRef();

    const [translate, setTranslate] = useState(0);

    // const handleMouseEnter = () => {

    //     if (dotsRef.current) {
    //         dotsRef.current.style.opacity = '1';
    //     }
    // }

    // const handleMouseLeave = (e) => {

    //     if (dotsRef.current && !e.target !== dotsRef.current) {
    //         dotsRef.current.style.opacity = '0';
    //     }
    // }


    const goToSlide = (index) => {


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



    const scroll = useCallback(
        y => {
            if (y > 0) {
                return sliderRef?.current?.slickNext(); /// ? <- using description below 
            } else {
                return sliderRef?.current?.slickPrev();
            }
        },
        [sliderRef]
    );
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            window.addEventListener("wheel", e => {
                scroll(e.deltaY);
            });
        }

        return (() => {
            window.removeEventListener("wheel", e => {
                scroll(e.deltaY);
            });
        })
    }, [scroll]);


 
   
        var settings = {
            dots: props.img.length > 1 ? true : false ,
            infinite: false,
            speed: 250,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            className: 'ass',
            swipeToSlide: true,
            centerMode:  props.img.length > 1 ? false : true,
            variableWidth: true,
 
            afterChange: (currentIndex) => { goToSlide(currentIndex) },
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
                        opacity: '1',
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
                                key={index}
                                onClick={() => goToSlide(index)}
                            >
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
                       
                    }
                },
            ]
        };
        return (
            <div style={{ height: '100%', width: '100%', position: 'relative' }}>

                <Slider ref={sliderRef} {...settings}   >
                    {(props.img).map((item, index) => (
                        <div
                            onClick={() => { props.setActive(true); props.setSelected(index) }}
                            // onMouseEnter={() => handleMouseEnter()}
                            // onMouseLeave={(e) => handleMouseLeave(e)}
                            key={index}><img className='sliderImage' src={item} alt="" /></div>
                    ))}

                </Slider>

            </div>
        );
    }
// };

export default Carousel;