import s from './HelpButton.module.scss';

const HelpButton = ({ small }) => {
    return (
        <div className={`${s.button} ${small ? s.small : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.08594 8.99959C9.32104 8.33126 9.78509 7.7677 10.3959 7.40873C11.0067 7.04975 11.7248 6.91853 12.4231 7.0383C13.1214 7.15808 13.7548 7.52112 14.211 8.06312C14.6673 8.60512 14.917 9.29112 14.9159 9.99959C14.9159 11.9996 11.9159 12.9996 11.9159 12.9996" stroke="#B2ACBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.9922 17H12.0022" stroke="#B2ACBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default HelpButton;