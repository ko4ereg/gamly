import { useEffect, useRef, useState } from 'react';
import s from './ModalCarousel.module.scss';
import CloseButton from '../../common/CloseButton/CloseButton';
import close from './../../../assets/icons/close.svg';
import prev from './../../../assets/icons/arrowleft.svg';
import next from './../../../assets/icons/arrowright.svg';
import Slider from 'react-slick';
import './ModalCarousel.css';

const ModalCarousel = ({ active, setActive, img }) => {

    const [selected, setSelected] = useState(0);

    const modalSliderRef = useRef();

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = '17px';

            // if (window.innerWidth < 1024) {
      
            //     document.body.style.marginRight = `auto`;
            // }



        }

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft' && active) {
                handlePrev();
            }
            if (e.key === 'ArrowRight' && active) {
                handleNext();
            }

        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = "auto";
            document.body.style.marginRight = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [active])



    const handleClick = (e) => {

        if (e.target.classList.contains(s.active)) {
            setActive(false)
        }
    }

    const handleClickOnItem = (index) => {
        setSelected(index);

        if (modalSliderRef.current) {
            modalSliderRef.current.slickGoTo(index);
        }

    }

    const handlePrev = () => {
        setSelected(prevSelected => prevSelected === 0 ? img.length - 1 : prevSelected - 1);
        if (modalSliderRef) {
            modalSliderRef.current.slickPrev();
        }
    }
    const handleNext = () => {
        setSelected(prevSelected => prevSelected === img.length - 1 ? 0 : prevSelected + 1);
        if (modalSliderRef) {
            modalSliderRef.current.slickNext();
        }
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: 'popup-slider',
        swipeToSlide: false,
        swipe: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    swipe: true,
                    speed: 500,
                    dots: false
                }
            },
        ]
    };

    return (
        <div className={`${s.modal_container} ${active ? s.active : ''} `} onClick={(e) => { handleClick(e) }}>
            <div className={s.closeButton}><CloseButton icon={close} onClick={() => { setActive(false) }} /></div>
            <div className={s.carouselContainer}>
                 
                     <div className={s.preview}>
                    {img.map((item, index) => (
                        <div onClick={() => handleClickOnItem(index)} className={`${s.preview_item} ${selected === index ? s.selected : ''} `}><img src={item} alt="" /></div>
                    ))}
                </div>
               
               
                <div className={s.imageContainer}  >
                    {img.length > 1 ? <div className={s.buttonLeft} onClick={handlePrev} ><CloseButton icon={prev} ></CloseButton></div> : null}
                    <Slider ref={modalSliderRef} {...settings}>
                        {img.map((item, index) => (
                            <div className={s.fullsize}
                                onClick={() => { setSelected(true) }}
                                key={index}><img src={item} alt="" /></div>
                        ))}
                    </Slider>
                    {/* <div className={s.fullsize}><img src={img[selected]} alt="" /></div> */}
                    {img.length > 1 ? <div className={s.buttonRight} onClick={handleNext}> <CloseButton  icon={next} /></div> : null}

                </div>

            </div>

        </div>
    )
}

export default ModalCarousel;