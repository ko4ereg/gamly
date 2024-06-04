import s from './MiniFooter.module.scss';
import g from './../../Globalstyles.module.css';
import { NavLink } from 'react-router-dom';
import TextButtonC1 from '../common/Buttons/TextButtonC1/TextButtonC1';

const MiniFooter = () => {
    return (
        <footer>
            <div className={g.container + ' ' + s.container}>
                <div className={s.rights}>2024, all rights reserved</div>
                <div className={s.options}>
                    <NavLink to={'https://www.google.com'} target='_blank'><div>Публичная оферта</div></NavLink>
                    <NavLink to={'https://www.google.com'} target='_blank'>    <div>Политика конфиденциальности</div></NavLink>
                </div>
                <div className={s.design}>
                    Designed by:
                    <NavLink to={'https://www.google.com'} target='_blank'>
                        <TextButtonC1 text={'Kirill Lukovich'} />
                    </NavLink>
                </div>

            </div>
        </footer>
    )
}

export default MiniFooter;
