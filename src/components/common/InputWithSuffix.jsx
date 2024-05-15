import { useLayoutEffect, useRef, useState } from 'react';
import s from './InputWithSuffix.module.scss';

const InputWithSuffix = ({ value, suffix, placeholder, ...props }) => {

    const [inputRightPadding, setInputRightPadding] = useState(0);

    const inputPadding = 0;
    const suffixGap = 3;
    const suffixRef = useRef();


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

    console.log(value);
    return (
        <div className={s.inputWrapper}>
            <input
                type='tel'
                style={{
                    padding: inputPadding,
                    paddingRight: inputRightPadding,
                }}
                className={s.input}
                value={value}
                placeholder={placeholder}
                {...props}
            />
            <div className={s.inputFakeValueWrapper} style={{ gap: suffixGap, padding: inputPadding }}>
                <span className={s.inputFakeValue}>{value || placeholder}</span>
                <span ref={suffixRef} className={s.suffix}>
                    {suffix}
                </span>
            </div>
        </div>
    )
}

export default InputWithSuffix;