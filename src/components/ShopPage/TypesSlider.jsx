import React, { useEffect, useRef, useState } from 'react';
import s from './ShopPage.module.scss';




const TypesSlider = () => {

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [isMobile, setIsMobile] = useState(true);

    const handleItemClick = (index) => {
        if (selectedTypes.includes(index)) {
            // Если категория уже выбрана, удаляем ее из списка выбранных
            setSelectedTypes(selectedTypes.filter(item => item !== index));
        } else {
            // Если категория не выбрана, добавляем ее в список выбранных
            setSelectedTypes([...selectedTypes, index]);
        }
    }


    const sliderRef = useRef(null);
    const backgroundRightRef = useRef(null);
    const backgroundLeftRef = useRef(null);




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


    const checkScroll = () => {
        const slider = sliderRef.current;
        const backgroundRight = backgroundRightRef.current;
        const backgroundLeft = backgroundLeftRef.current;

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
    };


    console.log(isMobile);
    useEffect(() => {

        if (window.innerWidth > 1023) {
            setIsMobile(false);
            if (!isMobile && sliderRef.current) {
                sliderRef.current.addEventListener('mousedown', handleMouseDown);
            }
        } else {
            setIsMobile(true);
        }

        if (sliderRef.current) {
            // const checkScroll = () => {
            //     const slider = sliderRef.current;
            //     const backgroundRight = backgroundRightRef.current;
            //     const backgroundLeft = backgroundLeftRef.current;

            //     if (slider.scrollWidth <= slider.clientWidth) {
            //         backgroundRight.style.opacity = '0';
            //     } else if (slider.scrollWidth > slider.clientWidth) {
            //         backgroundRight.style.opacity = '1';
            //     }


            //     if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            //         backgroundRight.style.opacity = '0';
            //     } else {
            //         backgroundRight.style.opacity = '1';
            //     }

            //     if (slider.scrollLeft === 0) {
            //         backgroundLeft.style.opacity = '0';
            //     } else {
            //         backgroundLeft.style.opacity = '1';
            //     }
            // };
            checkScroll();
            sliderRef.current.addEventListener('scroll', checkScroll);



        }

        return (() => {
            sliderRef.current.removeEventListener('mousedown', handleMouseDown);
            sliderRef.current.removeEventListener('scroll', checkScroll);
        })
    }, []);


    const types = [
        { value: 'headphones', label: 'Наушники' },
        { value: 'keyboard', label: 'Клавиатуры' },
        { value: 'mouse', label: 'Мыши' },
        { value: 'chairs', label: 'Кресла' },
        { value: 'table', label: 'Столы' },
        { value: 'other', label: 'Прочее' },



    ]

    return (
        <div className={s.sliderContainer}>
            <div ref={backgroundRightRef} className={s.filters_types_background_right}></div>
            <div ref={backgroundLeftRef} className={s.filters_types_background_left}></div>
            <div ref={sliderRef}
                // onTouchStart={handleTouchStart}

                onMouseDown={handleMouseDown} className={s.filters_types}>

                {
                    types.map((type, index) => (
                        <div key={index} className={`${s.filters_types_item} ${selectedTypes.includes(type.value) ? s.selected : ''}`} onClick={() => handleItemClick(type.value)}>{type.label}</div>
                    ))
                }

            </div>
        </div>
    );
};

export default TypesSlider;

