
<<<<<<< HEAD
import { useEffect } from 'react';
import { formatValue } from '../../../../../utils/formatValue';
=======
>>>>>>> parent of 57ec11e (1651)
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

        setFromPrice(e.target.value);
    }
    const handleChangeToInput = (e) => {
<<<<<<< HEAD
        let formattedValue = formatValue(e.target.value);
        setToPrice(formattedValue);
      
=======

        setToPrice(e.target.value);
>>>>>>> parent of 57ec11e (1651)
    }
 
    let hiddenFrom = (fromPrice === null || fromPrice === '') && (toPrice === null || toPrice === '');
   

    return (

        <div className={g.filter}>
            <div className={g.filterHeading}>
                <h4>Подключение</h4>
<<<<<<< HEAD
                <TextButtonC2 hidden={hiddenFrom}  onClick={handleFilterReset} text={'Сбросить'} /></div>
=======
                <TextButtonC2 onClick={handleFilterReset} text={'Сбросить'} /></div>
>>>>>>> parent of 57ec11e (1651)
            <div className={s.pricing}>
                <div className={s.fromTo}>от   <InputWithSuffix placeholder={'0'}
                    value={fromPrice}
                    onChange={ handleChangeFromInput }
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

