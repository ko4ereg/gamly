import s from './RoundCheckbox.module.scss';

const RoundCheckbox = ({ type, selectedType, onChange, label }) => {
 console.log(type);
 console.log(selectedType);
    return (
        <div className={s.input}>
            <input type="checkbox" id={type} onChange={() => onChange(!selectedType)} checked={selectedType} />
            <label htmlFor={type}><div className={s.check}>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                        <path id="Vector" d="M3.33594 8.66602L6.0026 11.3327L12.6693 4.66602" stroke="#F9F8FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>

                {label}
            </div>
            </label>
        </div>
    )
}

export default RoundCheckbox;