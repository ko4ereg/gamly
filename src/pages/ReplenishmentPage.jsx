import { useState } from 'react';
import ReplenishmentPopup from '../components/ReplenishmentPage/FilterPopup/ReplenishmentPopup';
import g from './../Globalstyles.module.css';


const ReplenishmentPage = (props) => {
    const [popupActive, setPopupActive] = useState(false);

    return (
        <div className={g.container}>
            <button onClick={() => setPopupActive(!popupActive)}>CLICK</button>
            <ReplenishmentPopup setPopupActive={setPopupActive} popupActive={popupActive} />
        </div>)
}

export default ReplenishmentPage;