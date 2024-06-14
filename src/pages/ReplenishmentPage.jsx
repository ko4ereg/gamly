import { useState } from 'react';
import g from './../Globalstyles.module.css';
import s from './ReplenishmentPage.module.css';
import TopContainer from '../components/ReplenishmentPage/TopContainer/TopContainer';
import BottomContainer from '../components/ReplenishmentPage/BottomContainer/BottomContainer';

import PopupWithImage from '../components/common/Popup/PopupWithImage';
import BottomMenu from '../components/common/Buttons/BottomMenu/BottomMenu';
import PopupLogin from '../components/common/Popup/PopupContent/PopupLogin/PopupLogin';
import PopupWithoutImage from '../components/common/Popup/PopupWithoutImage';
import PopupAccountReplenishment from '../components/common/Popup/PopupContent/PopupAccountReplenishment/PopupAccountReplenishment';
import ButtonPrimary from '../components/common/Buttons/ButtonPrimary/ButtonPrimary';
import PopupReplenishment from '../components/common/Popup/PopupLayouts/PopupReplenishment/PopupReplenishment';
import loginback from './../assets/popup/loginback.png';


const ReplenishmentPage = (props) => {
    const [popupActive, setPopupActive] = useState(false);
    const [selectedType, setSelectedType] = useState('skins');

    const [link, setLink] = useState('');

    const [login, setLogin] = useState('');
    const [price, setPrice] = useState('');
    const [promo, setPromo] = useState('');
    const [priceWithoutFormat, setPriceWithoutFormat] = useState(0);

    const [toLogin, setToLogin] = useState(false);

    return (
        <div style={{ background: 'transparent' }}>
            <TopContainer selectedType={selectedType} setSelectedType={setSelectedType} />
            <div className={g.container + ' ' + s.container}>
                <BottomContainer
                    link={link}
                    setLink={setLink}
                    priceWithoutFormat={priceWithoutFormat}
                    setPriceWithoutFormat={setPriceWithoutFormat}
                    promo={promo}
                    setPromo={setPromo}
                    price={price}
                    setPrice={setPrice}
                    login={login}
                    setLogin={setLogin}
                    setPopupActive={setPopupActive} selectedType={selectedType} setSelectedType={setSelectedType} />

                {selectedType === 'skins' && <PopupReplenishment promo={promo} setToLogin={setToLogin} price={price} login={login} link={link} priceWithoutFormat={priceWithoutFormat} setPopupActive={setPopupActive} popupActive={popupActive} />}
                {toLogin && <PopupWithImage image={loginback} popupActive={toLogin} setPopupActive={setToLogin} heading={'Войти в аккаунт'} note={'Начните получать бонусы и сохраняйте свои данные для быстрого пополнения!'}>
                    <PopupLogin />
                    <BottomMenu></BottomMenu>
                </PopupWithImage>}
                {selectedType !== 'skins' && <PopupWithoutImage popupActive={popupActive} setPopupActive={setPopupActive} heading={'Пополнение аккаунта'} bottom={<BottomMenu separator={true}><ButtonPrimary text={'Перейти к пополнению'} /></BottomMenu>} >
                    <PopupAccountReplenishment />

                </PopupWithoutImage>}



            </div>

        </div>)
}

export default ReplenishmentPage;