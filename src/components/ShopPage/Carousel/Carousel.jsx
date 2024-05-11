import React, { useRef, useState  } from 'react';
import s from './Carousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';

const Carousel = (props) => {
const [currentIndex, setIndex] = useState(0);
    const sliderRef = useRef();
    const amountOfSlides = 100 / (props.img.length);
const varIndex = currentIndex || currentIndex + 1 || currentIndex - 1;
    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
        setIndex(index);
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
                    bottom: '6.5%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '4px',
                    
              
                  }}
                >
                  <ul  style={{display: 'flex', gap: '4px'}}> {dots} </ul>
                </div>
              ),
            // appendDots: dots => (
            //     <div
            //       style={{
            //         position: 'absolute',
            //         bottom: '16px',
            //         display: 'flex',
            //         justifyContent: 'center',
            //         gap: '4px',
                    
              
            //       }}
            //     >
            //       <ul  style={{display: 'flex', gap: '4px'}}> 
            //       {props.img.map((item, index) => (
            //             <li style={{ display: index === currentIndex || index === currentIndex + 1 || index === currentIndex - 1  ? 'flex' : 'none'}} className={currentIndex === index ? 'slick-active' : ''}
            //                 key={index}>
            //                     <button></button>
            //             </li>
            //         ))}
            //        </ul>
            //     </div>
            //   ),
        };
        return (
            <div>
                <Slider ref={sliderRef} {...settings}>
                    {(props.img).map((item, index) => (
                        <div key={index}><img src={item} alt="" /></div>
                    ))}

                </Slider>
                <div className={s.sliderThumbnails}>
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