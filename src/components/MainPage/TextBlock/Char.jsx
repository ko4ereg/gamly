import s from './Paragraph.module.scss';
import { motion, useTransform } from "framer-motion";

const Char = ({ children, progress, range, totalChars }) => {

    const opacity = useTransform(progress, range, [0, 1])
    const isAccent = (totalChars - range[0] * totalChars <= 25);
 
    return (
        <>
            <span className={s.shadow}>{children}</span>
            <motion.span className={`${s.span} ${isAccent && s.accent}`}   style={{ opacity: opacity }}>{children}</motion.span>
        </>

    )

}

export default Char;