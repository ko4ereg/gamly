import { useState } from 'react';
import ReplenishmentPopup from '../components/ReplenishmentPage/FilterPopup/ReplenishmentPopup';
import g from './../Globalstyles.module.css';
import s from './ReplenishmentPage.module.css';
import TopContainer from '../components/ReplenishmentPage/TopContainer/TopContainer';
import BottomContainer from '../components/ReplenishmentPage/BottomContainer/BottomContainer';

const ReplenishmentPage = (props) => {
    const [popupActive, setPopupActive] = useState(false);
    const [selectedType, setSelectedType] = useState('skins');

    const [link, setLink] = useState('');
  
    const [login, setLogin] = useState('');
    const [price, setPrice] = useState('');
    const [promo, setPromo] = useState('');
    const [priceWithoutFormat, setPriceWithputFormat] = useState(0);


    return (
        <div style={{ background: 'transparent' }}>
            <TopContainer selectedType={selectedType} setSelectedType={setSelectedType} />
            <div className={g.container + ' ' + s.container}>
                <BottomContainer 
                link={link}
                setLink={setLink}
                priceWithoutFormat={priceWithoutFormat}
                setPriceWithputFormat={setPriceWithputFormat}
                promo={promo}
                setPromo={setPromo}
                price={price}
                setPrice={setPrice}
                login={login}
                setLogin={setLogin}
                setPopupActive={setPopupActive} selectedType={selectedType} setSelectedType={setSelectedType} />
                {/* <button onClick={() => setPopupActive(!popupActive)}>CLICK</button> */}
                <ReplenishmentPopup promo={promo} price={price} login={login} link={link} priceWithoutFormat={priceWithoutFormat} setPopupActive={setPopupActive} popupActive={popupActive} />
            </div>
        </div>)
}

export default ReplenishmentPage;