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

    
    useEffect(() =>  {
        if (sliderRef.current) {
            const checkScroll = () => {
                const slider = sliderRef.current;
                const backgroundRight = backgroundRightRef.current;
                const backgroundLeft = backgroundLeftRef.current;
                
                if (slider && slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                    backgroundRight.style.display = 'none';
                } else {
                    backgroundRight.style.display = 'block';
                }
    
                if ( slider && slider.scrollLeft === 0) {
                    backgroundLeft.style.display = 'none';
                } else {
                    backgroundLeft.style.display = 'block';
                }
            };
    
            sliderRef.current.addEventListener('scroll', checkScroll);
    
            return () => {
                if (sliderRef.current) {
                    sliderRef.current.removeEventListener('scroll', checkScroll);
                }
            };
        
        }
    }, []);

    return (
 <div className={s.sliderContainer}>
     <div ref={backgroundRightRef} className={s.filters_types_background_right}></div>
     <div ref={backgroundLeftRef} className={s.filters_types_background_left}></div>
        <div ref={sliderRef}

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

 