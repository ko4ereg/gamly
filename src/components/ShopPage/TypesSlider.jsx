import React, { useEffect, useRef, useState } from 'react';
import s from './ShopPage.module.scss';
import { prods } from '../mock/products';




const TypesSlider = ({ actualProducts, setActualProducts, setFiltered, filtered }) => {

    const [selectedTypes, setSelectedTypes] = useState([]);


    const handleItemClick = (index) => {
        if (actualProducts.length == 0) return setActualProducts(prods);
        if (selectedTypes.includes(index)) {
            // Если категория уже выбрана, удаляем ее из списка выбранных
            setSelectedTypes(selectedTypes.filter(item => item !== index));
            setActualProducts(actualProducts.filter(product => product.type !== index));
 
        } else {
            // Если категория не выбрана, добавляем ее в список выбранных
            setSelectedTypes([...selectedTypes, index]);
            const filteredProducts = prods.filter(product => product.type === index);
            console.log(filteredProducts.length);
            if (filteredProducts.length === 0) {
                console.log('pusto');
                return setActualProducts([]);
            }
            if (actualProducts.length === prods.length) {
                return setActualProducts([...filteredProducts]);
            } else {
                setActualProducts([...actualProducts, ...filteredProducts]);
            }

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

    const [width, setWidth] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);

    }

    useEffect(() => {

        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        if (sliderRef.current) {
            const checkScroll = () => {
                const slider = sliderRef.current;
                const backgroundRight = backgroundRightRef.current;
                const backgroundLeft = backgroundLeftRef.current;

                if (slider.scrollWidth <= slider.clientWidth) {
                    backgroundRight.style.display = 'none';
                } else {
                    backgroundRight.style.display = 'block';
                }

                if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                    backgroundRight.style.display = 'none';
                } else {
                    backgroundRight.style.display = 'block';
                }

                if (slider.scrollLeft === 0) {
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
                window.removeEventListener('resize', handleWindowResize);

            };

        }
    }, [width]);



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
                onTouchStart={handleTouchStart}

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

