
import HeadingBlock from "../components/MainPage/HeadingBlock/HeadingBlock";
import TextBlock from "../components/MainPage/TextBlock/TextBlock";
import g from './../Globalstyles.module.css';
import s from './MainPage.module.css';

const MainPage = (props) => {


    return (
        <div className={g.container + ' ' + s.container}>
            <HeadingBlock/>
            <TextBlock/>
            <HeadingBlock/>
        </div>)
}

export default MainPage;