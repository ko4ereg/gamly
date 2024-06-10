import { NavLink } from 'react-router-dom';
import RedirectButton from '../common/Buttons/RedirectButton/RedirectButton';
import s from './Empty.module.scss';
 

const Empty = () => {

    return (
        <div className={s.container}>
            <div className={s.heading}>Корзина пуста</div>
           <div className={s.buttons}>
           <NavLink to={'/shop'}> <RedirectButton text={'Игровая периферия'} subtext={'Перейти в раздел магазина'}/> </NavLink>
           <NavLink to={'/shop'}> <RedirectButton text={'Дискорд и оформление'} subtext={'Перейти в раздел магазина'}/></NavLink>
           <NavLink to={'/shop'}> <RedirectButton text={'Цифровые подарки и игры'} subtext={'Перейти в раздел магазина'}/></NavLink>
           <NavLink to={'/shop'}>  <RedirectButton text={'Компьютеры и комплектующие'} subtext={'Перейти в раздел магазина'}/></NavLink>
           </div>
        </div>
    )
}

export default Empty;