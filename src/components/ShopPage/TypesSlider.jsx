import React, { useEffect, useRef } from 'react';
import s from './ShopPage.module.scss';

 

 
const TypesSlider = () => {
    const sliderRef = useRef(null);
    const backgroundRightRef = useRef(null);
    const backgroundLeftRef = useRef(null);


    const handleWheel = (e) => {
        e.preventDefault();
        sliderRef.current.scrollLeft += e.deltaY;
        sliderRef.current.scrollRight -= e.deltaY;
    };

    const handleMouseDown = (e) => {
        const startX = e.pageX - sliderRef.current.offsetLeft;
        const scrollLeft = sliderRef.current.scrollLeft;

        const onMouseMove = (e) => {
            const x = e.pageX - sliderRef.current.offsetLeft;
            const walk = (x - startX) * 1; // чувствительность перетаскивания

            sliderRef.current.scrollLeft = scrollLeft - walk;
        };

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        });
    };
 
  

    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        const scrollLeft = sliderRef.current.scrollLeft;
    
        const onTouchMove = (e) => {
            const touchMoveX = e.touches[0].clientX;
            const touchDistance = touchStartX - touchMoveX;
    
            sliderRef.current.scrollLeft = scrollLeft + touchDistance;
        };
    
        const onTouchEnd = () => {
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        };
    
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    };
    
    useEffect(() =>  {
        if (sliderRef.current) {
            const checkScroll = () => {
                const slider = sliderRef.current;
                const backgroundRight = backgroundRightRef.current;
                const backgroundLeft = backgroundLeftRef.current;
                
                if ( window.innerWidth >= 1920 || slider.scrollLeft >= slider.scrollWidth - slider.clientWidth ) {
                    backgroundRight.style.display = 'none';
                } else {
                    backgroundRight.style.display = 'block';
                }
    
                if (window.innerWidth >= 1920   || slider.scrollLeft === 0 ) {
                    backgroundLeft.style.display = 'none';
                } else {
                    backgroundLeft.style.display = 'block';
                }
            };
            sliderRef.current.addEventListener('touchstart', handleTouchStart);
            sliderRef.current.addEventListener('scroll', checkScroll);
    
            return () => {
                if (sliderRef.current) {
                    sliderRef.current.removeEventListener('scroll', checkScroll);
                    sliderRef.current.removeEventListener('touchstart', handleTouchStart);
                }
            };
        
        }
    }, []);

    return (
 <div className={s.sliderContainer}>
     <div ref={backgroundRightRef} className={s.filters_types_background_right}></div>
     <div ref={backgroundLeftRef} className={s.filters_types_background_left}></div>
        <div ref={sliderRef}
onTouchStart={handleTouchStart}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown} className={s.filters_types}>
 
            <div className={s.filters_types_item}>Наушники</div>
            <div className={s.filters_types_item}>Клавиатуры</div>
            <div className={s.filters_types_item}>Мыши</div>
            <div className={s.filters_types_item}>Кресла</div>
            <div className={s.filters_types_item}>Столы</div>
            <div className={s.filters_types_item}>Мониторы</div>
            <div className={s.filters_types_item}>Прочее</div>
           
        </div>
        </div>
    );
};

export default TypesSlider;

 