import s from './Checkbox.module.scss';

const Checkbox = ({ value, children, isChecked, setIsChecked }) => {

 
    return (
        <div className={s.checkbox}>
            <input type="checkbox" id={value} checked={isChecked}
                onChange={() => { 
                    setIsChecked(value) 
                }}
            />
            <label htmlFor={value}>
            <div className={`${s.check} ${isChecked ? s.checked : ''}`}>
                    {isChecked
                        ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                        <path id="Vector" d="M3.33594 8.66602L6.0026 11.3327L12.6693 4.66602" stroke="#F9F8FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        
                        : null}
                </div>
                {children}</label>
        </div>
    )
}

export default Checkbox;