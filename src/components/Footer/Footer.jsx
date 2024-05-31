import s from './Footer.module.scss';
import g from './../../Globalstyles.module.css';
import { NavLink } from 'react-router-dom';
import TextButtonC1 from '../common/Buttons/TextButtonC1/TextButtonC1';

const Footer = () => {
    return (
        <footer>
            <div className={g.container + ' ' + s.container}>
                <div className={s.rights}>2024, all rights reserved</div>
                <div className={s.options}>
                    <div>Публичная оферта</div>
                    <div>Политика конфиденциальности</div>
                </div>
                <div className={s.design}>
                    Designed by:
                    <NavLink>
                        <TextButtonC1 text={'Kirill Lukovich'} />
                    </NavLink>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
