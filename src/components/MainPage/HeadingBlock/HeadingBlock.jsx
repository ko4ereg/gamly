import s from './HeadingBlock.module.scss';
import Heading from './Heading/Heading';
import HeadingFeatures from './HeadingFeatures/HeadingFeatures';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeadingBlock = (props) => {
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null);
    const translateY = useTransform(scrollYProgress, [0, 1], [0,  100]); 
    const { scrollY } = useScroll(); // Отслеживаем значение Y-скролла
    const opacity = useTransform(scrollY, [0, 400], [0.34, 0]);
    return (
        <section className={s.headingBlock}>
            <Heading />
            <HeadingFeatures />
            <motion.div  
            // style={{  translateY }}
            style={{  opacity:  opacity   }}
        ref={scrollRef}  className={s.backEllipse} />
        </section>)
}

export default HeadingBlock;