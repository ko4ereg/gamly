import { formatValue } from '../../../../utils/formatValue';
import TextButtonC2 from '../../Buttons/TextButtonC2/TextButtonC2';
import SmallInput from '../../SmallInput/SmallInput';
// import g from './../../FilterPopup.module.scss';
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

        <div className={s.container}>
            <div className={s.heading}>
                Цена
                <TextButtonC2 hidden={hiddenFrom} onClick={handleFilterReset} text={'Сбросить'} /></div>
            <div className={s.pricing}>
                <SmallInput value={fromPrice} setValue={setFromPrice} placeholder={0} heading={'от'} number={true} currencyOff={true} />
                <SmallInput value={toPrice} setValue={setToPrice} placeholder={0} heading={'до'} number={true} currencyOff={true} />
            </div>
        </div>

    )
}

export default PriceFromTo;

