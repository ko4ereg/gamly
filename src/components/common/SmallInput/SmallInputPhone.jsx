import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './SmallInput.module.scss';
import { formatValue, unformatValue } from '../../../utils/formatValue';
import Indicator from '../Indicator/Indicator';
import CurrencyButton from '../CurrencyButton/CurrencyButton';
import Tooltip from '../Tooltip/Tooltip';
import GamlyCoin from '../GamlyCoin/GamlyCoin';
import TextButtonC2 from '../Buttons/TextButtonC2/TextButtonC2';
import ReactInputMask from 'react-input-mask';

const SmallInputPhone = ({ heading, value, setValue, number, placeholder, promo, tooltipText, coin, note, addInfo, setShowPromo, phone, ...props }) => {

    const [suffix, setSuffix] = useState('₽');

    const handleChangeNumberInput = (e) => {

        let formattedValue = formatValue(e.target.value);
        props.setPriceWithputFormat && props.setPriceWithputFormat(parseInt(unformatValue(formattedValue)));
        setValue(formattedValue);
    }

    const handleChangeTextInput = (e) => {
        setValue(e.target.value);
    }

    const [inputRightPadding, setInputRightPadding] = useState(0);

    const inputPadding = 0;
    const suffixGap = 3;
    const suffixRef = useRef();

    const [promoClicked, setPromoClicked] = useState(false);
    const [error, setError] = useState(false);

    const goodPromo = 'lala';

    const promoClick = () => {
        setPromoClicked(true);
        console.log(value);
        if (value === goodPromo) {
            setError(false);
            setShowPromo(true);
        } else {
            setError(true);
            setShowPromo(false);
        }


    }



    useEffect(() => {
        if (value.trim().length === 0) {
            setPromoClicked(false);
        }
    }, [value])


    useLayoutEffect(() => {
        const suffixWidth = suffixRef.current?.offsetWidth;
        setInputRightPadding(
            suffix && suffixWidth
                ? suffixWidth + (inputPadding + suffixGap)
                : inputPadding,
        )
    }, [suffix])

    if (value === null) {
        value = '';
    }

    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    }
    const handleMouseLeave = () => {
        setShowTooltip(false);
    }
    //Tooltip logic

    //aaa


    return (
        <div className={s.container}>

            <div className={s.title}>
                <div className={s.heading}>
                    {heading} 
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.inputWrapper}>
              {phone && <ReactInputMask type='text'  placeholder={placeholder} className={s.input} mask="+7 (999) 999-99-99" value={value} onChange={handleChangeTextInput} />} 
                   
                </div>
            </div>

        </div>
    )
}

export default SmallInputPhone;