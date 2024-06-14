import { useState } from 'react';
import s from './PopupFiltersLayout.module.scss';
import PopupWithoutImage from '../../PopupWithoutImage';
import BottomMenu from '../../../Buttons/BottomMenu/BottomMenu';
import ButtonPrimary from '../../../Buttons/ButtonPrimary/ButtonPrimary';
import PopupFilters from '../../PopupContent/PopupFilters/PopupFilters';
import ButtonSecondary from '../../../Buttons/ButtonSecondary/ButtonSecondary';


const PopupFiltersLayout = ({ popupActive, setPopupActive, note }) => {


    const [fromPrice, setFromPrice] = useState('');

    const [toPrice, setToPrice] = useState('');


    const [isChecked, setIsChecked] = useState([]);

    const [connectToPhone, setConnectToPhone] = useState(false);

    const [wires, setWires] = useState([]);

    const handleReset = () => {
        setIsChecked([]);
        setWires([]);
        setConnectToPhone(false);
        setFromPrice('');
        setToPrice('');
    }

    const disabled = !fromPrice && !toPrice && !wires.length && !isChecked.length && !connectToPhone;
    return (
        <PopupWithoutImage
            bottom={<BottomMenu separator={true}>
                <ButtonPrimary text={'Перейти к оплате'} />
                <ButtonSecondary disabled={disabled} onClick={handleReset} text={'Сбросить'} />
            </BottomMenu>}
            popupActive={popupActive} setPopupActive={setPopupActive} note={note} heading={"Пополнение steam"}>
            <div className={s.container}>
                <PopupFilters
                    fromPrice={fromPrice}
                    setFromPrice={setFromPrice}
                    toPrice={toPrice}
                    setToPrice={setToPrice}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    connectToPhone={connectToPhone}
                    setConnectToPhone={setConnectToPhone}
                    wires={wires}
                    setWires={setWires}

                />
            </div>

        </PopupWithoutImage>
    )
}

export default PopupFiltersLayout;