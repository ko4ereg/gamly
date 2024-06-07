import { NavLink } from "react-router-dom"
import PopupWithImage from "../../PopupWithImage"
import RedirectButton from "../../../Buttons/RedirectButton/RedirectButton"
import BottomMenu from "../../../Buttons/BottomMenu/BottomMenu"
import s from './PopupReplenishmentSucces.module.scss';
import succesback from './../../../../../assets/popup/succesreplenishmentback.png';
const PopupReplenishmentSucces = ({ popupActive, setPopupActive }) => {
    return (
      
        <PopupWithImage image={succesback} popupActive={popupActive} setPopupActive={setPopupActive} heading={"Пополнение прошло успешно"} note={'Вы пополнили свой счет на 1000 gamly coin, и можете начать их тратить уже сейчас!'}>
             <div className={s.container}><NavLink to={'/shop'}> <RedirectButton text={'Игровая периферия'} subtext={"Перейти в раздел магазина"} /></NavLink>
            <NavLink to={'/skins'}> <RedirectButton text={'Скины'} subtext={'Перейти в раздел скинов'} /></NavLink>
            <NavLink to={'/replenishment'}> <RedirectButton text={'Пополнить Steam'} subtext={"Перейти в раздел пополнения Steam"} /></NavLink>
            </div> 
            <BottomMenu footerSeparator={true}/>
        </PopupWithImage>
       
    )
}

export default PopupReplenishmentSucces;