import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './BigInput.module.scss';
import { formatValue, unformatValue } from '../../../utils/formatValue';
import SmallButton from '../Buttons/SmallButton/SmallButton';
import Indicator from '../Indicator/Indicator';
import CurrencyButton from '../CurrencyButton/CurrencyButton';

import Tooltip from '../Tooltip/Tooltip';

import GamlyCoin from '../GamlyCoin/GamlyCoin';

const BigInput = ({ heading, value, setValue, number, placeholder, promo, tooltipText, coin, ...props }) => {

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
            setError(false)
        } else {
            setError(true)
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

            <div className={s.title}>{heading} {value.trim().length > 0 && promoClicked && <span className={error ? s.error : s.ok}>-10% на первый заказ</span>}</div>
            <div className={s.wrapper}>
                <div className={s.inputWrapper}>
                    <input
                        type='text'
                        style={{
                            padding: inputPadding,
                            paddingRight: inputRightPadding,
                        }}
                        className={s.input}
                        value={value}
                        placeholder={placeholder}
                        onChange={number ? handleChangeNumberInput : handleChangeTextInput}
                        {...props}
                    />
                    {number && <div className={s.inputFakeValueWrapper} style={{ gap: suffixGap, padding: inputPadding }}>
                        <span className={s.inputFakeValue}>{value || placeholder}</span>
                        <span ref={suffixRef} className={s.suffix}>
                            {coin ? <div className={s.coin}><GamlyCoin /></div> : suffix}
                        </span>
                    </div>}

                </div>
                <div className={s.addition}>
                    {number && <CurrencyButton setSuffix={setSuffix} />}
                    {promo && value.trim().length > 0 && <SmallButton onClick={promoClick} text={'Применить'} />}
                    {promoClicked && <Indicator succes={error ? false : true} />}
                    <div className={s.helpButton} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                        <Tooltip tooltipText={tooltipText} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BigInput;