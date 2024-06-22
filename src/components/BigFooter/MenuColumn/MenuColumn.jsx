import MenuButton from '../../common/Buttons/MenuButton/MenuButton';
import RedirectButton from '../../common/Buttons/RedirectButton/RedirectButton';
import s from './MenuColumn.module.scss';



const MenuColumn = () => {



    return (
        <div className={s.outerContainer}>
            <div className={s.container}>
                <div className={s.buttons}>
                    <RedirectButton text={'Vk'} small={true} />
                    <RedirectButton text={'Telegram'} small={true} />
                    <RedirectButton text={'Discord'} small={true} />
                </div>
                <div className={s.menu}>
                    <div className={s.heading}>ПРОДУКТЫ</div>
                    <div className={s.menu_buttons}>
                        <div className={s.menu_button}  ><MenuButton text={'Пополнение Steam'} /> </div>
                        <div className={s.menu_button}  ><MenuButton text={'Магазин'} /> </div>
                        <div className={s.menu_button}  ><MenuButton text={'Внутриигровые предметы'} /> </div>
                        <div className={s.menu_button}  ><MenuButton text={'Гарант'} /> </div>
                    </div>
                </div>
                <div className={`${s.menu} ${s.small}`}>
                        <div className={s.heading}>gamly</div>
                        <div className={s.menu_buttons}>
                            <div className={s.menu_button}  >   <MenuButton small={true} text={'Главная'} /></div>
                            <div className={s.menu_button}  >    <MenuButton small={true} text={'Личный кабинет'} /></div>
                            <div className={s.menu_button}  >    <MenuButton small={true} text={'Реферальная программа'} /></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MenuColumn;