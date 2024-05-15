
import { useEffect } from 'react';
import { formatValue } from '../../../../../utils/formatValue';
import InputWithSuffix from '../../../../common/InputWithSuffix';
import TextButtonC2 from '../../../../common/TextButtonC2/TextButtonC2';
import g from './../../FilterPopup.module.scss';
import s from './PriceFromTo.module.scss';

const PriceFromTo = ({ fromPrice, toPrice, setToPrice, setFromPrice }) => {




    const handleFilterReset = () => {
        setFromPrice(null);
        setToPrice(null);
    }

    const handleChangeFromInput = (e) => {
        let formattedValue = formatValue(e.target.value);
        setFromPrice(formattedValue);
    }
    const handleChangeToInput = (e) => {
        let formattedValue = formatValue(e.target.value);
        setToPrice(formattedValue);
      
    }
 
    let hiddenFrom = (fromPrice === null || fromPrice === '') && (toPrice === null || toPrice === '');
   

    return (

        <div className={g.filter}>
            <div className={g.filterHeading}>
                <h4>Подключение</h4>
                <TextButtonC2 hidden={hiddenFrom}  onClick={handleFilterReset} text={'Сбросить'} /></div>
            <div className={s.pricing}>
                <div className={s.fromTo}>от   <InputWithSuffix placeholder={'0'}
                    value={fromPrice}
                    onChange={handleChangeFromInput}
                    suffix={'₽'} />  </div>
                <div className={s.fromTo}>до <InputWithSuffix placeholder={'0'}
                    value={toPrice}
                    onChange={handleChangeToInput}
                    suffix={'₽'} />  </div>
            </div>
        </div>

    )
}

export default PriceFromTo;

