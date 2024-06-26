import { useState } from 'react';
import g from './../Globalstyles.module.css';
import PopupReplenishment from '../components/common/Popup/PopupLayouts/PopupReplenishment/PopupReplenishment';
import PopupWithImage from '../components/common/Popup/PopupWithImage';
import PopupLogin from '../components/common/Popup/PopupContent/PopupLogin/PopupLogin';
import BottomMenu from '../components/common/Buttons/BottomMenu/BottomMenu';
import PopupReplenishmentSucces from '../components/common/Popup/PopupLayouts/PopupReplenishmentSucces/PopupReplenishmentSucces';
import PopupReplenishmentFailure from '../components/common/Popup/PopupLayouts/PopupReplenishmentFailure/PopupReplenishmentFailure';
import loginback from './../assets/popup/loginback.png';
import PopupFiltersLayout from '../components/common/Popup/PopupLayouts/PopupFiltersLayout/PopupFiltersLayout';


const SubscribePage = (props) => {

    const [replenishment, setReplenishment] = useState(false);
    const [login, setLogin] = useState(false);
    const [succes, setSucces] = useState(false);
    const [fail, setFail] = useState(false);
    const [filter, setFilter] = useState(false);

    return (
        <div className={g.container}>
               <video autoPlay={true}   loop muted  >
        <source src="https://vold-website-assets.s3.amazonaws.com/Main+video.mp4" type="video/mp4" />
        </video>
            <button onClick={() => setReplenishment(!replenishment)} style={{ color: 'white' }}> Пополнение</button>
            <PopupReplenishment popupActive={replenishment} setPopupActive={setReplenishment} />
            <button onClick={() => setLogin(!login)} style={{ color: 'white' }}> Логин</button>
            <PopupWithImage image={loginback} back={'login'} popupActive={login} setPopupActive={setLogin} heading={'Войти в аккаунт'} note={'Начните получать бонусы и сохраняйте свои данные для быстрого пополнения!'}>
                <PopupLogin />
                <BottomMenu></BottomMenu>
            </PopupWithImage>
            <button onClick={() => setSucces(!succes)} style={{ color: 'white' }}> успех</button>
            <PopupReplenishmentSucces popupActive={succes} setPopupActive={setSucces} />
            <button onClick={() => setFail(!fail)} style={{ color: 'white' }}> Ошибка</button>
            <PopupReplenishmentFailure popupActive={fail} setPopupActive={setFail} />
            <button onClick={() => setFilter(!filter)} style={{ color: 'white' }}> Фильтры</button>
            <PopupFiltersLayout popupActive={filter} setPopupActive={setFilter}/>
                        {/* <PopupWithoutImage heading={'Фильтры'} note={12} popupActive={filter} setPopupActive={setFilter}>
                <PopupFilters />
            </PopupWithoutImage> */}

        </div>)
}

export default SubscribePage;