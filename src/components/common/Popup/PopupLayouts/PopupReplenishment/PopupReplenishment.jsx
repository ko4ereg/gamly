import { useState } from 'react';
import s from './PopupReplenishment.module.scss';
import PopupWithoutImage from '../../PopupWithoutImage';
import BottomMenu from '../../../Buttons/BottomMenu/BottomMenu';
import ButtonPrimary from '../../../Buttons/ButtonPrimary/ButtonPrimary';
import PopupSkinsReplenishment from '../../PopupContent/PopupSkinsReplenihshment/PopupSkinsReplenishment';


const PopupReplenishment = ({ popupActive, setPopupActive, login, link, priceWithoutFormat, promo, price, setToLogin }) => {


    const [selectedType, setSelectedType] = useState('');

    return (
        <PopupWithoutImage bottom={<BottomMenu separator={true}><ButtonPrimary disabled={!selectedType} text={'Перейти к оплате'} /></BottomMenu>} popupActive={popupActive} setPopupActive={setPopupActive} heading={"Пополнение steam"}>
            <div className={s.container}>
                <PopupSkinsReplenishment setToLogin={setToLogin} selectedType={selectedType} setSelectedType={setSelectedType} promo={false} link={link} price={price} priceWithoutFormat={priceWithoutFormat} />
            </div>

        </PopupWithoutImage>
    )
}

export default PopupReplenishment;