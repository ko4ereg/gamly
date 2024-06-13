import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './SmallInput.module.scss';
import { formatValue, unformatValue } from '../../../utils/formatValue';
import Indicator from '../Indicator/Indicator';
import CurrencyButton from '../CurrencyButton/CurrencyButton';
import Tooltip from '../Tooltip/Tooltip';
import GamlyCoin from '../GamlyCoin/GamlyCoin';
import TextButtonC2 from '../Buttons/TextButtonC2/TextButtonC2';


const SmallInput = ({ heading, value, setValue, number, placeholder, promo, tooltipText, coin, note, addInfo, setShowPromo, currencyOff, invalid, ...props }) => {

    const [suffix, setSuffix] = useState('₽');

    const handleChangeNumberInput = (e) => {

        let formattedValue = formatValue(e.target.value);
        props.setPriceWithoutFormat && props.setPriceWithoutFormat(parseInt(unformatValue(formattedValue)));
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
    const [promoOk, setPromoOk] = useState(false);
    const goodPromo = 'lala';

    const promoClick = () => {
        setPromoClicked(true);
        console.log(value);
        if (value === goodPromo) {
            setError(false);
            setShowPromo(true);
            setPromoOk(true);
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



    return (
        <div className={`${s.container} ${invalid && s.invalid}`}>

            <div className={s.title}>
                <div className={s.heading}>
                    {heading} {value.trim().length > 0 && promoClicked && <div className={error ? s.error : s.ok}>-10% на первый заказ</div>}
                </div>
                {note && <div className={s.noteContainer}>
                    <div style={{ WebkitLineClamp: addInfo ? 1 : 2 }} className={s.info}>Приблизительное время доставки: </div>
                    <div className={s.addInfo}>{addInfo}</div>
                </div>}
            </div>
            <div className={s.wrapper}>
                <div className={s.inputWrapper}>

                    <input
                        type='text'
                        style={{
                            padding: inputPadding,
                            paddingRight: inputRightPadding,
                            wordWrap: 'break-word'
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
                    {number && !currencyOff && <CurrencyButton setSuffix={setSuffix} />}
                    <div className={s.promo}>

                        {promo && value.trim().length > 0 && !promoOk && <TextButtonC2 onClick={promoClick} text={'Применить'} />}
                        {promoClicked && <Indicator small={true} succes={error ? false : true} />}
                    </div>
                    {tooltipText && <div className={s.helpButton} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                        <Tooltip small={true} tooltipText={tooltipText} />
                    </div>}

                </div>
            </div>

        </div>
    )
}

export default SmallInput;