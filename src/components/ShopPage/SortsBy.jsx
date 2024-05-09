import s from './ShopPage.module.scss';
import rectangleSort from './../../assets/icons/rectangleSort.svg';

import { useState } from 'react';
const SortsBy = (props) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleCheckboxChange = (e) => {
        setSelectedOption(e.target.id);
        props.setSort(e.target.id === 'popular' ? 'сначала популярные' : e.target.id === 'cheap' ? 'сначала дешевые' : e.target.id === 'exp' ? 'сначала дорогие' : 'по скидке (%)');

    };

    return (

        <div className={s.sortsBy}>
            <ul>
                <img src={rectangleSort} alt="" />

                <li  >
                    <input type="checkbox" id="popular" checked={selectedOption === 'popular'} onChange={handleCheckboxChange} />
                    <label for="popular"><div className={s.check}></div>сначала популярные</label>
                </li>
                <li>
                    <input type="checkbox" id="cheap" checked={selectedOption === 'cheap'}
                        onChange={handleCheckboxChange} />
                    <label for="cheap"><div className={s.check}></div>сначала дешевые</label>
                </li>
                <li>
                    <input type="checkbox" id="exp" checked={selectedOption === 'exp'}
                        onChange={handleCheckboxChange} />
                    <label for="exp"><div className={s.check}></div>сначала дорогие</label>
                </li>
                <li>
                    <input type="checkbox" id="discont" checked={selectedOption === 'discont'}
                        onChange={handleCheckboxChange} />
                    <label for="discont"><div className={s.check}></div>по скидке (%)</label>
                </li>
            </ul>
        </div>

    )
}

export default SortsBy;