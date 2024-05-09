import { useState } from 'react';
import s from './HeaderNavMenu.module.css';
import { NavLink } from 'react-router-dom';
import burgergray from './../../assets/icons/burgerGray.svg';

const HeaderNavMenuBurger = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const navActive = ({ isActive }) => (isActive ? s.activeLink : s.link);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={s.navmenu}>
            <div className={s.burger} onClick={toggleMenu}>
              <img src={burgergray} alt="" />
            </div>
            {isOpen && (
                <nav className={s.navLinks}>
                    <NavLink className={navActive} to={"/"}><div>Главная</div></NavLink>
                    <NavLink className={navActive} to={"/add"}><div>Пополнение</div></NavLink>
                    <NavLink className={navActive} to={"/subscribe"}><div>Подписки</div></NavLink>
                    <NavLink className={navActive} to={"/acii"}><div>Акции</div></NavLink>
                    <NavLink className={navActive} to={"/shop"}><div>Магазин</div></NavLink>
                </nav>
            )}
        </div>
    )
}

export default HeaderNavMenuBurger;