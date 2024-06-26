import { useEffect, useRef, useState } from 'react';
import s from './ModalCarousel.module.scss';
import CloseButton from '../../common/Buttons/CloseButton/CloseButton';
import close from './../../../assets/icons/close.svg';
import prev from './../../../assets/icons/arrowleft.svg';
import next from './../../../assets/icons/arrowright.svg';
import Slider from 'react-slick';
import './ModalCarousel.css';

const ModalCarousel = ({ active, setActive, img, selected, setSelected }) => {



    const modalSliderRef = useRef();
    const fadeLeft = useRef();
    const fadeRight = useRef();
    const previewSlider = useRef();

    const checkScroll = () => {

        const slider = previewSlider.current;
        const backgroundRight = fadeRight.current;
        const backgroundLeft = fadeLeft.current;

        if (slider) {
            if (window.innerWidth > 1439) {
                if (slider.scrollHeight <= slider.clientHeight) {
                    backgroundRight.style.opacity = '0';
                } else if (slider.scrollHeight > slider.clientHeight) {
                    backgroundRight.style.opacity = '1';
                }

                if (slider.scrollTop >= slider.scrollHeight - slider.clientHeight) {
                    backgroundRight.style.opacity = '0';
                } else {
                    backgroundRight.style.opacity = '1';
                }

                if (slider.scrollTop === 0) {
                    backgroundLeft.style.opacity = '0';
                } else {
                    backgroundLeft.style.opacity = '1';
                }
            } else {
                if (slider.scrollWidth <= slider.clientWidth) {
                    backgroundRight.style.opacity = '0';
                } else if (slider.scrollWidth > slider.clientWidth) {
                    backgroundRight.style.opacity = '1';
                }

                if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                    backgroundRight.style.opacity = '0';
                } else {
                    backgroundRight.style.opacity = '1';
                }

                if (slider.scrollLeft === 0) {
                    backgroundLeft.style.opacity = '0';
                } else {
                    backgroundLeft.style.opacity = '1';
                }
            }

        }
    };


    useEffect(() => {

        const slider = previewSlider.current;
        const backgroundRight = fadeLeft.current;
        const backgroundLeft = fadeLeft.current;

        if (slider && backgroundRight && backgroundLeft) {
            checkScroll();
        }

    }, []);


    useEffect(() => {
        if (active && window.innerWidth > 1023) {
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = '17px';



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

        if (modalSliderRef) {
            modalSliderRef.current.slickPrev();
        }
        // setSelected(prevSelected => prevSelected === 0 ? img.length - 1 : prevSelected - 1);
    }
    const handleNext = () => {
        // setSelected(prevSelected => prevSelected === img.length - 1 ? 0 : prevSelected + 1);
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
        waitForAnimate: false,
        initialSlide: selected,
        onInit: () => {
            const previewItem = document.getElementById(`preview${selected}`);
            if (previewItem) {
                previewItem.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            };
        },
        afterChange: (nextIndex) => {
            setSelected(nextIndex);
            const previewItem = document.getElementById(`preview${nextIndex}`);
            if (previewItem) {
                previewItem.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            };


        },
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    swipe: true,
                    speed: 300,
                    dots: false,

                    infinite: img.length > 1 ? true : false
                }
            },
        ]
    };






    if (img.length === 1) {
        return (
            <div className={`${s.modal_container} ${active ? s.active : ''} `} onClick={(e) => { handleClick(e) }}>
                <div className={s.closeButton}><CloseButton icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                        <path id="Vector" d="M4.50391 11.495L7.99899 7.99998M7.99899 7.99998L11.4941 4.50488M7.99899 7.99998L4.50391 4.50488M7.99899 7.99998L11.4941 11.495" stroke="#B2ACBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
                } onClick={() => { setActive(false) }} /></div>
                <div className={s.carouselContainer}>
                    <div className={s.border}>
                        <div className={s.preview_container}>
                            <div
                                ref={fadeLeft}
                                className={s.fadeLeft}></div>
                            <div
                                ref={fadeRight}
                                className={s.fadeRight}></div>
                            <div className={s.preview} onScroll={checkScroll} ref={previewSlider}>

                                {img.map((item, index) => (
                                    <div onClick={() => handleClickOnItem(index)} className={`${s.preview_item} ${selected === index ? s.selected : ''} `}><img src={item} alt="" /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={s.imageContainer}  >
                        {active ?
                            <Slider ref={modalSliderRef} {...settings}>
                                {img.map((item, index) => (
                                    <div className={s.fullsize}
                                        key={index}><img src={item} alt="" /></div>
                                ))}
                            </Slider>
                            : null}
                    </div>
                </div>
            </div>)

    }

    return (
        <div className={`${s.modal_container} ${active ? s.active : ''} `} onClick={(e) => { handleClick(e) }}>
            <div className={s.closeButton}><CloseButton icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame">
                    <path id="Vector" d="M4.50391 11.495L7.99899 7.99998M7.99899 7.99998L11.4941 4.50488M7.99899 7.99998L4.50391 4.50488M7.99899 7.99998L11.4941 11.495" stroke="#B2ACBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>
            } onClick={() => { setActive(false) }} /></div>
            <div className={s.carouselContainer}>
                <div className={s.border}>

                    <div className={s.preview_container}>
                        <div
                            ref={fadeLeft}
                            className={s.fadeLeft}></div>
                        <div
                            ref={fadeRight}
                            className={s.fadeRight}></div>
                        <div className={s.preview} onScroll={checkScroll} ref={previewSlider}>

                            {img.map((item, index) => (
                                <div onClick={() => handleClickOnItem(index)} id={`preview${index}`} className={`${s.preview_item} ${selected === index ? s.selected : ''} `}><img src={item} alt="" /></div>
                            ))}
                        </div>

                    </div>

                </div>


                <div className={s.imageContainer}  >
                    <div className={s.buttonLeft} onClick={handlePrev} ><CloseButton icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 4L6 8L10 12" stroke="#B2ACBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>} ></CloseButton></div>
                    {active ?
                        <Slider ref={modalSliderRef} {...settings}>
                            {img.map((item, index) => (
                                <div className={s.fullsize}
                                    // onClick={() => { setSelected(true) }}
                                    key={index}><img src={item} alt="" /></div>
                            ))}
                        </Slider>
                        : null}

                    <div className={s.buttonRight} onClick={handleNext}> <CloseButton icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="#B2ACBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>} /></div>

                </div>

            </div>

        </div>
    )
}

export default ModalCarousel;