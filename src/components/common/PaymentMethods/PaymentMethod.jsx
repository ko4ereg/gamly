import s from './PaymentMethod.module.scss';

const PaymentMethod = ({ logo, title, subtitle, type, selectedType, onClick }) => {
    return (
        <div className={`${s.container} ${selectedType === type ? s.selected : ''}`} onClick={() => onClick(type)}>
           
            <div className={s.logo}>{logo}</div>
            <div className={s.text}>
                <div className={s.title}>{title}</div>
                <div className={s.subtitle}>{subtitle}</div>
            </div>
            <div className={s.input}>
                <input type="checkbox" id={type} checked={selectedType === type}  />
                <label htmlFor={type}><div className={s.check}></div></label>
            </div>

        </div>
    )
}

export default PaymentMethod;