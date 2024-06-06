import { useState } from 'react';
import RadioButton from '../../RadioButton';
import s from './BottomMenu.module.scss';
import TextButtonC1 from '../TextButtonC1/TextButtonC1';
import { NavLink } from 'react-router-dom';

const BottomMenu = ({ separator, switcher, children, setPayRuby, payRuby, footerSeparator }) => {
    const points = '147';


    return (
        <div className={s.container}>
            {separator && <div className={s.separator}></div>}
            {switcher &&
                <div className={s.switcher}>
                    <div className={s.points}>Списать доступные баллы: <div className={s.ruby}>{points} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                        <path d="M10.1697 17.4575L0.198325 5.47616L4.91533 7.18778L10.1697 17.4575Z" fill="#F23E59" />
                        <path d="M10.1697 17.4575L20.0217 5.47616L15.3047 7.13591L10.1697 17.4575Z" fill="#CC1732" />
                        <path d="M10.1697 17.4575L15.3047 7.13592L4.85563 7.13592L10.1697 17.4575Z" fill="#E7213F" />
                        <path d="M15.3047 7.1875L10.1697 1.89709L16.9766 1.4303L15.3047 7.1875Z" fill="#E7334F" />
                        <path d="M4.85563 7.13582L3.30319 1.27479L10.1697 1.89718L4.85563 7.13582Z" fill="#FC4C67" />
                        <path d="M10.1697 1.89705L3.3032 1.27463L7.20151 0.791429L12.5156 0.791429L16.9766 1.43023L10.1697 1.89705Z" fill="#FF647B" />
                        <path d="M16.9766 1.43037L19.9561 5.5898L15.3047 7.13578L16.9766 1.43037Z" fill="#D8233E" />
                        <path d="M3.3032 1.27468L4.91534 7.18756L0.198332 5.47594L3.3032 1.27468Z" fill="#FF6078" />
                        <path d="M10.1697 1.89697L15.3047 7.13558H4.85563L10.1697 1.89697Z" fill="#F43754" />
                    </svg></div></div>
                    <RadioButton value={'payRuby'} setIsChecked={setPayRuby} isChecked={payRuby} />
                </div>
            }
            <div className={s.buttons}>
                {children}
            </div>
            {!children && <div style={{ borderTop: footerSeparator ? ' 1.5px solid var(--gray-4)' : 'none' }} className={s.footer}>
                <div className={s.rights}>2024, all rights reserved</div>
                <div className={s.links}>
                    Поддержка:
                    <div className={s.link}>
                        <NavLink to={'https://www.google.com'} target='_blank'>
                            <TextButtonC1 text={'Telegram'} />
                        </NavLink>
                        <NavLink to={'https://www.google.com'} target='_blank'>
                            <TextButtonC1 text={'Vk'} />
                        </NavLink>

                    </div></div>
            </div>}
        </div>
    )
}

export default BottomMenu;