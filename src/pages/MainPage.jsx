
import { useEffect } from "react";
import HeadingBlock from "../components/MainPage/HeadingBlock/HeadingBlock";
import Paragraph from "../components/MainPage/TextBlock/Paragraph";
import TextBlock from "../components/MainPage/TextBlock/TextBlock";
import g from './../Globalstyles.module.css';
import s from './MainPage.module.css';
import BottomBlock from "../components/MainPage/BottomBlock/BottomBlock";

const MainPage = (props) => {

 
    return (
        <div className={g.container + ' ' + s.container}>
            <HeadingBlock/>
            {/* <TextBlock/> */}
            <Paragraph/>
            <BottomBlock/>
        </div>)
}

export default MainPage;