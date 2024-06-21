import HeadingBlock from "../components/MainPage/HeadingBlock/HeadingBlock";
import { ReactLenis, useLenis } from 'lenis/react'
import g from './../Globalstyles.module.css';
import s from './MainPage.module.css';
import BottomBlock from "../components/MainPage/BottomBlock/BottomBlock";
 
import Paragraph from "../components/MainPage/TextBlock/Paragraph";


const MainPage = (props) => {

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })
    
    return (
      
        <div className={g.container + ' ' + s.container}>
            <HeadingBlock />
            {/* <TextBlock/> */}
            <Paragraph />
            <BottomBlock />
        </div>
     )
}

export default MainPage;