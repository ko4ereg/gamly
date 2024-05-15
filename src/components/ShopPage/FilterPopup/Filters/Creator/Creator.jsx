import Search from "./Search";
import s from './../../FilterPopup.module.scss';
import Selector from "./Selector";
import { useState } from "react";
import TextButtonC2 from "../../../../common/TextButtonC2/TextButtonC2";
import SmallSearchbar from "../../../../common/SmallSearchbar/SmallSearchbar";



const Creator = (props) => {
    const [showAll, setShowAll] = useState(false);
    const [filterValue, setFilterValue] = useState('');

    const handleFilterReset = () => {
        props.setIsChecked([]);
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
        <div className={s.filter}>
            <div className={s.filterHeading}><h4>Производитель</h4> <TextButtonC2 hidden={props.isChecked.length === 0} onClick={handleFilterReset} text={'Сбросить'} /></div>
            <div className={s.container}>

                {options.length > 5 ? <SmallSearchbar placeholder={'Найти'} setFilterValue={setFilterValue} showAll={showAll} /> : null}
                <Selector options={options} filterValue={filterValue} showAll={showAll} setShowAll={setShowAll} setIsChecked={props.setIsChecked} isChecked={props.isChecked} />
            </div>
        </div>
    )
}

export default Creator;