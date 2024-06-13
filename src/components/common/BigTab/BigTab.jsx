import { useState } from 'react';
import s from './BigTab.module.scss';

const BigTab = ({ text, selected, type, setSelectedType }) => {

    const [prevSelected, setPrevSelected] = useState(null);

    const handleTabClick = () => {
        if (selected !== type) {
            setPrevSelected(selected);
            setSelectedType(type);

        }
    }

    const getDirection = () => {
        if (prevSelected === null) {
            return null;
        } else {
            return prevSelected < type ? s.left : s.right;
        }
    }

    return (
        <div
            onClick={handleTabClick}
            // onClick={() => setSelectedType(type)} 
            className={`${s.tab} ${selected === type && s.selected}`}>
            {text}
            <div className={`${s.border} ${getDirection()}`}></div>
        </div>
    )
}

export default BigTab;