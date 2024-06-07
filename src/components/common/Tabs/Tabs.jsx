import { useEffect, useRef } from 'react';
import s from './Tabs.module.scss';
import { useDraggable } from 'react-use-draggable-scroll';

const Tabs = ({ children }) => {
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


    const { events: events2 } = useDraggable(sliderRef, {
        applyRubberBandEffect: true, decayRate: 0.5, safeDisplacement: 21
    });

    return (

        <div className={s.tabs_container}>
            <div
                ref={backgroundRightRef}
                className={s.background_right}></div>
            <div
                ref={backgroundLeftRef}
                className={s.background_left}></div>
            <div ref={sliderRef}
                onScroll={checkScroll}

                {...events2}

                className={s.tabs}>

                {children}

            </div>
            <div className={s.border}></div>
        </div>
    )
}

export default Tabs;