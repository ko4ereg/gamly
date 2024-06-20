import { useMotionValueEvent, useScroll, motion, useTransform } from 'framer-motion';
 import s from './TextBlock.module.scss';

const CharacterAccent = ({ char, index, length, scrollYProgress }) => {

   
    const inputRange = [
        index === 0 ? 0 : (index - 1) / length - 0, // начинаем изменять прозрачность раньше
        index / length + 0.1 // продолжаем изменять прозрачность после появления символа
      ];
      const outputRange = [0.1, 1];
 
    const opacity = useTransform(scrollYProgress, inputRange, outputRange);

    
    const character = char === ' ' ? '\u00A0' : char;
    return (
        <motion.p key={index} className={s.green} style={{ opacity: opacity }}  >
            {character} 
        </motion.p>

    )
}

export default CharacterAccent;

