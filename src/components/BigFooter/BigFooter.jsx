import MiniFooter from '../MiniFooter/MiniFooter';
import s from './BigFooter.module.scss';
import LinksColumn from './LinksColumn/LinksColumn';
import MenuColumn from './MenuColumn/MenuColumn';

const BigFooter = () => {
    return (
        <div className={s.container}>
            <div className={s.top}><LinksColumn />
                <MenuColumn />
            </div>
           <div className={s.bottom}> <MiniFooter/></div>
            <div className={s.backEllipse} ></div>
        </div>
    )
}

export default BigFooter;