import s from './PopupFilters.module.scss';
import Wires from '../../../Filters/Wires/Wires';
import PriceFromTo from '../../../Filters/PriceFromTo/PriceFromTo';
import Creator from '../../../Filters/Creator/Creator';
import PhoneConnect from '../../../Filters/PhoneConnect/PhoneConnect';



const PopupFilters = ({ setFromPrice, fromPrice, toPrice, setToPrice, wires, setWires, connectToPhone, setConnectToPhone, isChecked, setIsChecked   }) => {
     
    return (

        <div className={s.container}>

            <PriceFromTo setFromPrice={setFromPrice} setToPrice={setToPrice} fromPrice={fromPrice} toPrice={toPrice} />

            <Creator isChecked={isChecked} setIsChecked={setIsChecked} />

            <Wires isChecked={wires} setIsChecked={setWires} />

            <PhoneConnect isChecked={connectToPhone} setIsChecked={setConnectToPhone} value={'connectPhone'} />

        </div>
    )
}

export default PopupFilters;