import { useEffect, useState } from 'react';
import s from './FilterPopup.module.scss';
import close from './../../../assets/icons/close.svg';
import Search from './Filters/Creator/Search';
import Creator from './Filters/Creator/Creator';
import Checkbox from '../../common/Checkbox';
import RadioButton from '../../common/RadioButton';
import Wires from './Filters/Wires.jsx/Wires';
import InputWithSuffix from '../../common/InputWithSuffix';
import PhoneConnect from './Filters/PhoneConnect/PhoneConnect';
import ButtonPrimary from '../../common/Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../common/Buttons/ButtonSecondary/ButtonSecondary';
import CloseButton from '../../common/Buttons/CloseButton/CloseButton';
import PriceFromTo from './Filters/PriceFromTo/PriceFromTo';
import { getNoun } from '../../../utils/getNoun';


const FilterPopup = ({ filterActive, setFilterActive, prodsAmount }) => {

  useEffect(() => {
    if (filterActive) {
      document.body.style.overflow = "hidden";
      // document.body.style.marginRight = '17px';
     
    if (window.innerWidth > 1024) {
      document.body.style.marginRight = `17px`;
    }
  
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = 'auto';
    }
  }, [filterActive])


  const handleClick = (e) => {

    if (e.target.classList.contains(s.active)) {
      setFilterActive(false)
    }
  }

  const [fromPrice, setFromPrice] = useState(null);

  const [toPrice, setToPrice] = useState(null);


  const [isChecked, setIsChecked] = useState([]);

  const [connectToPhone, setConnectToPhone] = useState(false);

  const [wires, setWires] = useState([]);

  const handleReset = () => {
    setIsChecked([]);
    setWires([]);
    setConnectToPhone(false);
    setFromPrice(null);
    setToPrice(null);
  }


  const noun = getNoun(prodsAmount, 'товар', 'товара', 'товаров');
  const amount = prodsAmount + ' ' + noun;

  const disabled = !fromPrice && !toPrice && !wires.length && !isChecked.length && !connectToPhone;

  return (
    <div className={`${s.modal_container} ${filterActive ? s.active : ''} `} onClick={(e) => { handleClick(e) }}>
      <div className={s.filter_container} >

        <div className={s.heading}>
          <div className={s.heading_title}>
            <h3>Фильтры </h3>
            <div className={s.amount}>
              {amount}
            </div>
          </div>


          <CloseButton icon={close} onClick={() => { setFilterActive(false) }} />
        </div>
        <div className={s.filters_container}>

          <PriceFromTo setFromPrice={setFromPrice} setToPrice={setToPrice} fromPrice={fromPrice} toPrice={toPrice} />
          <Creator isChecked={isChecked} setIsChecked={setIsChecked} />

          <Wires isChecked={wires} setIsChecked={setWires} />

          <PhoneConnect isChecked={connectToPhone} setIsChecked={setConnectToPhone} value={'connectPhone'} />

        </div>


        <div className={s.buttons}>

          <ButtonPrimary text={'Применить'} />
          <ButtonSecondary onClick={handleReset} disabled={disabled} text={'Сбросить'} />

        </div>
      </div>

    </div>
  )
}

export default FilterPopup;