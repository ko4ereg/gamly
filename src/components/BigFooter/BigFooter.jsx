import MiniFooter from '../MiniFooter/MiniFooter';
import s from './BigFooter.module.scss';
import LinksColumn from './LinksColumn/LinksColumn';
import MenuColumn from './MenuColumn/MenuColumn';

const BigFooter = () => {
    return (
        <div className={s.container}>
            <LinksColumn />
            <MenuColumn />
            
                 {/* <div className={s.backEllipse} ></div> */}
        </div>
    )
}

export default BigFooter;