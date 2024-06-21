import HeadingBlock from "../components/MainPage/HeadingBlock/HeadingBlock";

import g from './../Globalstyles.module.css';
import s from './MainPage.module.css';
import BottomBlock from "../components/MainPage/BottomBlock/BottomBlock";
import Paragraph1 from "../components/MainPage/Paragraph/Text";
import Paragraph from "../components/MainPage/TextBlock/Paragraph";


const MainPage = (props) => {


    return (
        <div className={g.container + ' ' + s.container}>
            <HeadingBlock />
            {/* <TextBlock/> */}
            <Paragraph />
            <BottomBlock />
        </div>)
}

export default MainPage;