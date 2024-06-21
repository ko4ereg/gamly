 import { useMotionValueEvent, useScroll, motion, useTransform } from 'framer-motion';
 

const Character = ({ char, index, length, scrollYProgress }) => {

   
    // const inputRange = [( index - 1) / length, index / length];
 
    // const inputRange = [index === 0 ? 0 : (index - 1) / length, index / length];
    // const outputRange = [0.1, 1];
 
    const inputRange = [
        index === 0 ? 0 : (index - 1) / length - 0, // начинаем изменять прозрачность раньше
        index === 0 ?  index / length + 0.1 : index / length // продолжаем изменять прозрачность после появления символа
      ];
      const outputRange = [0.1, 1];

    const opacity = useTransform(scrollYProgress, inputRange, outputRange);

    
    const character = char === ' ' ? '\u00A0' : char;
    return (
        <motion.span key={index} style={{ opacity: opacity }}  >
            {character} 
        </motion.span>

    )
}

export default Character;

