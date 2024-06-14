import { useRef } from 'react';
import s from './SmallInput.module.scss';
import ReactInputMask from 'react-input-mask';

const SmallInputPhone = ({ heading, value, onChange, number,  placeholder, invalid,...props }) => {

    const inputRef = useRef();
    return (
        <div className={`${s.container} ${ invalid && s.invalid}`}>

            <div className={s.title}>
                <div className={s.heading}>
                    {heading}
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.inputWrapper}>
                    <ReactInputMask type='text' placeholder={placeholder} className={s.input} mask="+7 (999) 999-99-99" value={value} onChange={onChange}    ref={inputRef.current} />

                </div>
            </div>

        </div>
    )
}

export default SmallInputPhone;