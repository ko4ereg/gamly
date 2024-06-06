import ButtonPrimary from '../../../Buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../../Buttons/ButtonSecondary/ButtonSecondary';
import s from './PopupLogin.module.scss';

const PopupLogin = () => {
    return (
        <div className={s.container}>
            <ButtonPrimary icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M18.0312 4.75813L15.4954 17.9966C15.4954 17.9966 15.1406 18.9145 14.1659 18.4743L8.31511 13.8287L8.28798 13.815C9.07829 13.0802 15.2067 7.37412 15.4746 7.11548C15.8892 6.7149 15.6318 6.47643 15.1504 6.77902L6.09792 12.7322L2.60551 11.5153C2.60551 11.5153 2.0559 11.3129 2.00303 10.8727C1.94946 10.4318 2.6236 10.1933 2.6236 10.1933L16.8611 4.40942C16.8611 4.40942 18.0312 3.877 18.0312 4.75813Z" fill="#F9F8FC" />
            </svg>} text={"Войти через Telegram"} />
            <ButtonSecondary icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11.7983 16.566C5.69107 16.566 2.20765 12.3792 2.0625 5.41227H5.12169C5.22217 10.5258 7.47743 12.6918 9.2638 13.1384V5.41227H12.1444V9.82236C13.9085 9.63257 15.7616 7.62292 16.3869 5.41227H19.2675C18.7874 8.13651 16.7777 10.1462 15.3486 10.9724C16.7777 11.6422 19.0666 13.3951 19.9375 16.566H16.7666C16.0855 14.4447 14.3886 12.8034 12.1444 12.5801V16.566H11.7983Z" fill="#B2ACBF" />
            </svg>} text={"Войти через VK"} />
            <ButtonSecondary icon={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M17.0396 5.39931C15.9121 4.87681 14.7113 4.49181 13.4463 4.27181C13.2905 4.54681 13.1071 4.92264 12.988 5.22514C11.6496 5.02348 10.3205 5.02348 9.00966 5.22514C8.88132 4.92264 8.69799 4.54681 8.54216 4.27181C7.27715 4.49181 6.07632 4.87681 4.94882 5.39931C2.67549 8.82764 2.06132 12.1735 2.36382 15.4643C3.87632 16.5918 5.33382 17.2702 6.77299 17.7193C7.13049 17.2335 7.44215 16.711 7.71715 16.1702C7.19465 15.9777 6.69965 15.7302 6.23215 15.446C6.36049 15.3543 6.47965 15.2535 6.59882 15.1618C9.46798 16.5002 12.5755 16.5002 15.408 15.1618C15.5271 15.2627 15.6463 15.3543 15.7746 15.446C15.3071 15.7302 14.803 15.9685 14.2896 16.1702C14.5646 16.711 14.8763 17.2335 15.2338 17.7193C16.673 17.2702 18.1396 16.5918 19.643 15.4643C20.0005 11.6418 19.0288 8.33264 17.058 5.39931H17.0396ZM8.10215 13.4477C7.24049 13.4477 6.53465 12.6502 6.53465 11.6693C6.53465 10.6885 7.22215 9.891 8.10215 9.891C8.98215 9.891 9.67881 10.6885 9.66965 11.6693C9.66965 12.641 8.98215 13.4477 8.10215 13.4477ZM13.8863 13.4477C13.0246 13.4477 12.3188 12.6502 12.3188 11.6693C12.3188 10.6885 13.0063 9.891 13.8863 9.891C14.7663 9.891 15.463 10.6885 15.4538 11.6693C15.4538 12.641 14.7663 13.4477 13.8863 13.4477Z" fill="#B2ACBF" />
            </svg>} text={"Войти через Discord"} />
        </div>
    )
}

export default PopupLogin;