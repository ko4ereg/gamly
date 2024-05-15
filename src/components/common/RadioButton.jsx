import s from './RadioButton.module.scss';

const RadioButton = ({ value, isChecked, setIsChecked }) => {

  

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

 


    return (
        <div className={s.radiobutton}>
            <input type="checkbox" id={value} checked={isChecked}
                onChange={()=>handleCheckboxChange(value)}
            />
            <label for={value}>
            <div className={`${s.check} ${isChecked ? s.checked : ''}`}>
                   <div className={s.inner} ></div>
                </div>
</label>
        </div>
    )
}

export default RadioButton;