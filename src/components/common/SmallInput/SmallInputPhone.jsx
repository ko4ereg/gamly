import s from './SmallInput.module.scss';
import ReactInputMask from 'react-input-mask';

const SmallInputPhone = ({ heading, value, setValue, number, placeholder}) => {

    const handleChangeTextInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={s.container}>

            <div className={s.title}>
                <div className={s.heading}>
                    {heading} 
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.inputWrapper}>
               <ReactInputMask type='text'  placeholder={placeholder} className={s.input} mask="+7 (999) 999-99-99" value={value} onChange={handleChangeTextInput} /> 
                   
                </div>
            </div>

        </div>
    )
}

export default SmallInputPhone;