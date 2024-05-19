import React, { useEffect, useRef, useState } from 'react';
import s from './ShopPage.module.scss';
import { useDraggable } from 'react-use-draggable-scroll';
import { useDispatch } from 'react-redux';
import { addTypeItems, deleteTypeItems, getTypeItems, setTypeItems } from '../../store/productsSlice';




const TypesSlider = ({ selectedTypes, setSelectedTypes }) => {

    const dispatch = useDispatch();

    const handleItemClick = (index) => {
      
        if (selectedTypes.length === 0) {
            setSelectedTypes([index]);
            dispatch(setTypeItems(index));
        } else {


            if (selectedTypes.includes(index)) {
                // Если категория уже выбрана, удаляем ее из списка выбранных
                setSelectedTypes(selectedTypes.filter(item => item !== index));
                dispatch(deleteTypeItems(index)); 
            } else {
                // Если категория не выбрана, добавляем ее в список выбранных
                setSelectedTypes([...selectedTypes, index]);
                dispatch(addTypeItems(index));

            }
        }
    }

    useEffect(() => {
        if (selectedTypes.length === 0) {
            dispatch(getTypeItems());
        }
    }, [selectedTypes]);

 
    const sliderRef = useRef(null);
    const backgroundRightRef = useRef(null);
    const backgroundLeftRef = useRef(null);



    const checkScroll = () => {

        const slider = sliderRef.current;
        const backgroundRight = backgroundRightRef.current;
        const backgroundLeft = backgroundLeftRef.current;

        if (slider) {
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
    };


    useEffect(() => {

        const slider = sliderRef.current;
        const backgroundRight = backgroundRightRef.current;
        const backgroundLeft = backgroundLeftRef.current;

        if (slider && backgroundRight && backgroundLeft) {
            checkScroll();
        }

    }, []);


    const types = [
        { value: 'headphones', label: 'Наушники' },
        { value: 'keyboard', label: 'Клавиатуры' },
        { value: 'mouse', label: 'Мыши' },
        { value: 'chairs', label: 'Кресла' },
        { value: 'table', label: 'Столы' },
        { value: 'other', label: 'Прочее' },




    ]



    const { events: events2 } = useDraggable(sliderRef, {
        applyRubberBandEffect: true, decayRate: 0.5, safeDisplacement: 21
    });

    return (
        <div className={s.sliderContainer}>
            <div
                ref={backgroundRightRef}
                className={s.filters_types_background_right}></div>
            <div
                ref={backgroundLeftRef}
                className={s.filters_types_background_left}></div>
            <div ref={sliderRef}
                onScroll={checkScroll}

                {...events2}

                className={s.filters_types}>

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

