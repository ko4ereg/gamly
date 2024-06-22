import HeadingBlock from "../components/MainPage/HeadingBlock/HeadingBlock";

import g from './../Globalstyles.module.css';
import s from './MainPage.module.css';
import BottomBlock from "../components/MainPage/BottomBlock/BottomBlock";

import Paragraph from "../components/MainPage/TextBlock/Paragraph";
import BigFooter from "../components/BigFooter/BigFooter";
import { motion, useScroll, useTransform } from "framer-motion";


const MainPage = (props) => {
    const { scrollY } = useScroll(); // Отслеживаем значение Y-скролла
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);
    return (

        <div className={g.container + ' ' + s.container}>
            <motion.div
                style={{ opacity }}
                className={s.headingBlock}
            >
                <HeadingBlock /></motion.div>
            {/* <TextBlock/> */}
            <Paragraph />
            <BottomBlock />
            <BigFooter />
            <div className={s.backEllipse} ></div>
        </div>
    )
}

export default MainPage;