import s from './GamlyCoin.module.scss';

const GamlyCoin = ({ size }) => {
    return (
        <div className={s.coin}>
            <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox={`0 0 ${size} ${size}`} fill="none">
                <rect y="0.5" width={`${size}`} height={`${size}`} rx="11" fill="#343D33" />
                <path d="M13.2164 13.1236H16.2905C15.962 15.7988 13.7796 17.6057 10.9871 17.6057C7.84253 17.6057 5.68359 15.5172 5.68359 11.3871C5.68359 7.25694 7.84253 5.45001 11.0809 5.45001C14.0847 5.45001 16.1263 7.16308 16.314 9.88521H13.2399C13.0756 8.68841 12.2073 7.98441 11.0575 7.98441C9.76679 7.98441 8.71079 8.80575 8.71079 11.3167C8.71079 13.8276 9.76679 15.0479 10.9636 15.0479C12.1604 15.0479 13.0991 14.3673 13.2164 13.1236Z" fill="#D4EE5D" />
            </svg>
        </div>
    )
}

export default GamlyCoin;