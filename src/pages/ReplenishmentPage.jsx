import { useState } from 'react';
import ReplenishmentPopup from '../components/ReplenishmentPage/FilterPopup/ReplenishmentPopup';
import g from './../Globalstyles.module.css';
import s from './ReplenishmentPage.module.css';
import TopContainer from '../components/ReplenishmentPage/TopContainer/TopContainer';
import BottomContainer from '../components/ReplenishmentPage/BottomContainer/BottomContainer';

const ReplenishmentPage = (props) => {
    const [popupActive, setPopupActive] = useState(false);
    const [selectedType, setSelectedType] = useState('skins');
    return (
        <div style={{ background: 'transparent' }}>
            <TopContainer selectedType={selectedType} setSelectedType={setSelectedType} />
            <div className={g.container + ' ' + s.container}>
                <BottomContainer selectedType={selectedType} setSelectedType={setSelectedType} />
                {/* <button onClick={() => setPopupActive(!popupActive)}>CLICK</button> */}
                <ReplenishmentPopup setPopupActive={setPopupActive} popupActive={popupActive} />
            </div>
        </div>)
}

export default ReplenishmentPage;