import { useEffect, useRef } from 'react';
import s from './TextBlock.module.scss';
import { useMotionValueEvent, useScroll, motion, useTransform, useMotionValue } from 'framer-motion';
import Character from './Character';
import CharacterAccent from './CharacterAccent';

const TextBlock = (props) => {


  const ref = useRef(null);
 

  const text = 'Мы хотели чтобы геймеры в России могли покупать игры, все для компьютера, пополнять Steam и т.д. внутри одной экосистемы, и кажется...';
 
  const words = text.split(' ');
  
  const additionalText = 'у нас это получилось'; // Дополнительный текст
  const additionalCharacters = Array.from(additionalText);
  // additionalText.split(' '); 
  // Массив букв из дополнительного текста

  const textRef = useRef(null);
  // const characters = Array.from(text);
  const characters = Array.from(text);
  console.log(characters);

  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["50vh", "100vh"]
  });
  

  const accentStart = (characters.length - 1) / characters.length; // начало изменения прозрачности для CharacterAccent
  const accentOpacity = useTransform(scrollYProgress, [accentStart, 1], [0, 1]);

  return (
    <section className={s.textBlock}>

      <div className={s.text} ref={textRef}>
  
      {characters.map((char, index) => (
          <Character ref={ref} key={index} length={characters.length} scrollYProgress={scrollYProgress} index={index} char={char}/>
        ))}
   
        {additionalCharacters.map((char, index) => (
          <CharacterAccent ref={ref} key={`additional-${index}`} length={additionalCharacters.length} scrollYProgress={accentOpacity} index={index} char={char} />
        ))}
           
      </div>
 
    </section>
  )
}

export default TextBlock;

      {/* <p>Мы хотели чтобы геймеры в России могли покупать игры, все для компьютера, пополнять Steam и т.д. внутри одной экосистемы, и кажется... <span>у нас это получилось</span></p> */}
        {/* {characters.map((char, index) => {
          return (
            <motion.p key={index} style={{opacity: scrollYProgress}}>
               {char} 
          </motion.p>
          )
        })} */}