
import { useCallback, useEffect, useRef, useState } from 'react';
import ModalCarousel from '../ModalCarousel/ModalCarousel';
import s from './ProductCarousel.module.scss';
import Carousel from './Carousel';
import { useDraggable } from 'react-use-draggable-scroll';
const ProductCarousel = ({ productData, active, setActive, selected, setSelected }) => {


    const [translate, setTranslate] = useState(0);




    const sliderRef = useRef();
    const scroll = useCallback(
        y => {
            if (sliderRef.current) {
                sliderRef.current.scrollLeft += y > 0 ? 380 : -380;
            }
        },
        [sliderRef]
    );



    useEffect(() => {

        let currentSliderRef = sliderRef.current;

        if (window.innerWidth >= 1024 && currentSliderRef) {
            window.addEventListener("wheel", e => {
                scroll(e.deltaY);
            });
        }

        window.addEventListener('click', e => console.log(e.target))
        return (() => {
            if (currentSliderRef) {
                window.removeEventListener("wheel", e => {
                    scroll(e.deltaY);
                });
            }

        })
    }, [scroll]);




    const handleSliderScroll = () => {
        const scrollPosition = sliderRef.current.scrollLeft;
        const slideWidth = sliderRef.current.clientWidth;

        let selectedIndex;
        if (window.innerWidth > 1023) {
            selectedIndex = Math.round(scrollPosition / slideWidth);
        } else if (window.innerWidth < 479) {
            selectedIndex = Math.round(scrollPosition / 272);
        } else if (window.innerWidth < 767) {
            selectedIndex = Math.round(scrollPosition / 360);
        } else if (window.innerWidth) {
            selectedIndex = Math.round(scrollPosition / 404);
        }
     
    
        if (selectedIndex === 1) {
            setTranslate(0);
        } else if (selectedIndex === productData.img.length - 2 || selectedIndex === productData.img.length - 1) {
            setTranslate((productData.img.length - 3) * 8);
        } else {
            setTranslate((selectedIndex - 1) * 8);
        }
        setSelected(selectedIndex);
        
//         let selectedIndex;

// if (window.innerWidth > 1023) {
//     selectedIndex = Math.round(scrollPosition / slideWidth);
// } else if (window.innerWidth < 479) {
//     selectedIndex = Math.round(scrollPosition / 272);
// } else if (window.innerWidth < 767) {
//     selectedIndex = Math.round(scrollPosition / 360);
// } else {
//     selectedIndex = Math.round(scrollPosition / 404);
// }

// const translateValue = selectedIndex === 1 ? 0 : selectedIndex === productData.img.length - 2 || selectedIndex === productData.img.length - 1 ? (productData.img.length - 3) * 8 : (selectedIndex - 1) * 8;

// setTranslate(translateValue);
// setSelected(selectedIndex);
    };

    return (
        <div className={s.product_img}  >
            <div className={s.sliderContainer} >
                <div className={s.dotsContainer} style={{ display: productData.img.length === 1 ? 'none' : '' }}>
                    <div className={s.dots} style={{ transform: `translateX(-${translate}px)` }}>
                        {(productData.img).map((item, index) => (
                            <div
                                // onClick={() => { setActive(true); setSelected(index) }}
                                className={`${s.dot} ${index === selected ? s.activeDot : ''}`}
                                key={index}>

                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.slider} style={{ justifyContent: productData.img.length === 1 ? 'center' : '' }} onScroll={handleSliderScroll} ref={sliderRef}>
                    {(productData.img).map((item, index) => (
                        <div
                            onClick={() => { setActive(true); setSelected(index) }}
                            className={s.slide} style={{ background: `center / contain no-repeat url(${item}) var(--dark-gray)` }}
                            key={index}>

                        </div>
                    ))}
                </div>
            </div>

            {/* <Carousel active={active} setActive={setActive} selected={selected} setSelected={setSelected} img={productData.img} /> */}
        </div>
    )
}

export default ProductCarousel;