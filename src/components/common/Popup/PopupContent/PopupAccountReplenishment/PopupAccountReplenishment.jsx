import { useState } from 'react';
import BigInput from '../../../BigInput/BigInput';
import s from './PopupAccountReplenishment.module.scss';
import PaymentMethods from '../../../PaymentMethods/PaymentMethods';

const PopupAccountReplenishment = ({ }) => {

    const [price, setPrice] = useState('');
    const [selectedType, setSelectedType] = useState('');
    return (
        <div className={s.container}>
            <div className={s.top}>
                <BigInput heading={'Сумма к получению*'} value={price} placeholder={0} number={true} coin={true} setValue={setPrice} />
                <div className={s.bonuses}>Начислим за товары: <div className={s.ruby}>147 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                    <path d="M10.1699 17.4573L0.198524 5.47597L4.91553 7.1876L10.1699 17.4573Z" fill="#F23E59" />
                    <path d="M10.1699 17.4573L20.0219 5.47597L15.3049 7.13573L10.1699 17.4573Z" fill="#CC1732" />
                    <path d="M10.1696 17.4573L15.3045 7.13573L4.85547 7.13573L10.1696 17.4573Z" fill="#E7213F" />
                    <path d="M15.3048 7.1876L10.1699 1.89718L16.9767 1.43039L15.3048 7.1876Z" fill="#E7334F" />
                    <path d="M4.85556 7.13576L3.30312 1.27473L10.1697 1.89713L4.85556 7.13576Z" fill="#FC4C67" />
                    <path d="M10.1701 1.89714L3.30359 1.27473L7.20191 0.791521L12.516 0.791521L16.9769 1.43032L10.1701 1.89714Z" fill="#FF647B" />
                    <path d="M16.9761 1.43032L19.9556 5.58975L15.3042 7.13573L16.9761 1.43032Z" fill="#D8233E" />
                    <path d="M3.30301 1.27473L4.91515 7.18762L0.198141 5.47599L3.30301 1.27473Z" fill="#FF6078" />
                    <path d="M10.1696 1.89713L15.3045 7.13574H4.85547L10.1696 1.89713Z" fill="#F43754" />
                </svg></div></div>
            </div>
            <div className={s.bottom}>
                Метод оплаты
                <PaymentMethods setSelectedType={setSelectedType} selectedType={selectedType} />
            </div>

        </div>
    )
}

export default PopupAccountReplenishment;