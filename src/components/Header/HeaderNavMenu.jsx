import { useState } from 'react';
import s from './HeaderNavMenu.module.css';
import { NavLink } from 'react-router-dom';

const HeaderNavMenu = (props) => {
    const navActive = ({ isActive }) => (isActive ? s.activeLink : s.link);

    return (
        <nav className={s.navmenu} >
            <NavLink className={navActive} to={"/"}><div className={s.link_container}> Главная</div></NavLink>
            <NavLink className={navActive} to={"/replenishment"}> <div className={s.link_container}>Пополнение</div></NavLink>
            <NavLink className={navActive} to={"/subscribe"}> <div className={s.link_container}> Подписки</div></NavLink>
            <NavLink className={navActive} to={"/acii"}> <div className={s.link_container}>Акции</div></NavLink>
            <NavLink className={navActive} to={"/shop"}><div className={s.link_container}> Магазин</div></NavLink>
        </nav>
    )
}

export default HeaderNavMenu;