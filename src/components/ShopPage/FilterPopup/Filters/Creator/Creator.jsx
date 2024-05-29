import Search from "./Search";
import s from './../../FilterPopup.module.scss';
import Selector from "./Selector";
import { useState } from "react";
import TextButtonC2 from "../../../../common/Buttons/TextButtonC2/TextButtonC2";
import SmallSearchbar from "../../../../common/SmallSearchbar/SmallSearchbar";
import TextButtonC1 from "../../../../common/Buttons/TextButtonC1/TextButtonC1";



const Creator = (props) => {
    const [showAll, setShowAll] = useState(false);
    const [filterValue, setFilterValue] = useState('');

    const handleFilterReset = () => {
        props.setIsChecked([]);
    }

    const handleSelectAll = () => {
        props.setIsChecked(options.map(option => option.value));
    }
    const options = [
        { value: 'logitech', label: 'Logitech' },
        { value: 'razer', label: 'Razer' },
        { value: 'a4tech', label: 'A4Tech' },
        { value: 'acer', label: 'Acer' },
        { value: 'asus', label: 'Asus' },
        { value: 'sony', label: 'Sony' },
        { value: 'zet', label: 'Zet' },
        { value: 'jbl', label: 'JBL' },
        { value: 'hyperx', label: 'HyperX' },
        { value: 'corsair', label: 'Corsair' },
        { value: 'dareu', label: 'Dareu' },
        { value: 'epos', label: 'EPOS' },
        { value: 'hiper', label: 'HIPER' },
    ]


    return (
        <div className={s.filter} style={{gap: showAll ? '16px' : '2px' }}>
            <div className={s.filterHeading}><h4>Производитель</h4> <TextButtonC2 hidden={props.isChecked.length === 0} onClick={handleFilterReset} text={'Сбросить'} /></div>
            <div className={s.container}>
            {options.length > 5 ? <div className={`${s.containerHidden} ${showAll ? s.containerNotHidden : ''}`}  > <SmallSearchbar handleSelectAll={handleSelectAll} placeholder={'Найти'} setFilterValue={setFilterValue} showAll={showAll} />
                {showAll ?
                <TextButtonC1  text={'Выбрать все'} onClick={handleSelectAll} />
                : null} </div>  : null}
                <Selector options={options} filterValue={filterValue} showAll={showAll} setShowAll={setShowAll} setIsChecked={props.setIsChecked} isChecked={props.isChecked} />
            </div>
        </div>
    )
}

export default Creator;