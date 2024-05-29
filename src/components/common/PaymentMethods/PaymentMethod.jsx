import s from './PaymentMethod.module.scss';

const PaymentMethod = ({ logo, title, subtitle, type, selectedType, onChange }) => {
    return (
        <div className={`${s.container} ${selectedType === type ? s.selected : ''}`} onClick={() => onChange(type)}>

            <div className={s.logo}>{logo}</div>
            <div className={s.text}>
                <div className={s.title}>{title}</div>
                <div className={s.subtitle}>{subtitle}</div>
            </div>
            <div className={s.input}>
                <input type="checkbox" id={type} onChange={() => onChange(type)} checked={selectedType === type} />
                <label htmlFor={type}><div className={s.check}>
                    {selectedType === type
                        ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame">
                                <path id="Vector" d="M3.33594 8.66602L6.0026 11.3327L12.6693 4.66602" stroke="#F9F8FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        : null}
                </div>
                </label>
            </div>

        </div>
    )
}

export default PaymentMethod;