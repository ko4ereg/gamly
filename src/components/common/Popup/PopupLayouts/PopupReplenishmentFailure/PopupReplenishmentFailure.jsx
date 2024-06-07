import { NavLink } from "react-router-dom"
import PopupWithImage from "../../PopupWithImage"
import ButtonSecondary from "../../../Buttons/ButtonSecondary/ButtonSecondary"
import s from './PopupReplenishmentFailure.module.scss';
import BottomMenu from "../../../Buttons/BottomMenu/BottomMenu";
import failback from './../../../../../assets/popup/failreplenishmentback.png';

const PopupReplenishmentFailure = ({ popupActive, setPopupActive }) => {



    return (
        <PopupWithImage image={failback} popupActive={popupActive} setPopupActive={setPopupActive} heading={"Ошибка во время пополнения"} note={'Произошла ошибка во время пополнения. Попробуйте другой способ оплаты или обратитесь к нашей службе поддержки по кнопкам ниже'}>
            <div className={s.container}>
                <NavLink to={'http://www.google.com'}> <ButtonSecondary text={'Поддержка в Telegram'}  /></NavLink>
                <NavLink to={'http://www.google.com'}><ButtonSecondary text={'Поддержка в Vk'} subtext={'Перейти в раздел скинов'} /></NavLink>
            </div>
            <BottomMenu footerSeparator={true}/>
        </PopupWithImage>
    )
}

export default PopupReplenishmentFailure;