import s from './ShopPage.module.scss';
import rectangleSort from './../../assets/icons/rectangleSort.svg';

import { useState } from 'react';
const SortsBy = (props) => {
    const [selectedOption, setSelectedOption] = useState(props.currentSort);

    const handleCheckboxChange = (e) => {
        setSelectedOption(e.target.id);
        props.setSort(e.target.id === 'popular' ? 'сначала популярные' : e.target.id === 'cheap' ? 'сначала дешевые' : e.target.id === 'exp' ? 'сначала дорогие' : 'по скидке (%)');
        props.setSortsOpen(false);
    };

    return (

        <div className={s.sortsBy}>
            <ul>
                <img src={rectangleSort} alt="" />

                <li  >
                    <input type="checkbox" id="popular" checked={selectedOption === 'сначала популярные'} onChange={handleCheckboxChange} />
                    <label for="popular"><div className={s.check}></div>сначала популярные</label>
                </li>
                <li>
                    <input type="checkbox" id="cheap" checked={selectedOption === 'сначала дешевые'}
                        onChange={handleCheckboxChange} />
                    <label for="cheap"><div className={s.check}></div>сначала дешевые</label>
                </li>
                <li>
                    <input type="checkbox" id="exp" checked={selectedOption === 'сначала дорогие'}
                        onChange={handleCheckboxChange} />
                    <label for="exp"><div className={s.check}></div>сначала дорогие</label>
                </li>
                <li>
                    <input type="checkbox" id="discont" checked={selectedOption === 'по скидке (%)'}
                        onChange={handleCheckboxChange} />
                    <label for="discont"><div className={s.check}></div>по скидке (%)</label>
                </li>
            </ul>
        </div>

    )
}

export default SortsBy;