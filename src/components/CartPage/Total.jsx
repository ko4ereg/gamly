import { useState } from 'react';
import { formatValue } from '../../utils/formatValue';
import GamlyCoin from '../common/GamlyCoin/GamlyCoin';
import RubyCoin from '../common/RubyCoin/RubyCoin';
import SmallInput from '../common/SmallInput/SmallInput';
import s from './Total.module.scss';
import PaymentMethods from '../common/PaymentMethods/PaymentMethods';
import BottomMenu from '../common/Buttons/BottomMenu/BottomMenu';
import ButtonPrimary from '../common/Buttons/ButtonPrimary/ButtonPrimary';

const Total = ({ price }) => {


    const shipping = '1209';
    const promoCost = '502';
    const ruby = '147';
    const [showPromo, setShowPromo] = useState(false);
    const [promo, setPromo] = useState('');


    const [selectedType, setSelectedType] = useState('');
    const disabled = !selectedType;

    const [payRuby, setPayRuby] = useState(false);

    return (
        <div className={s.container}>
            <div className={s.heading}>Итого</div>

            <div className={s.order}>
                <div className={s.string}>
                    Товары <span>{formatValue(price || '0')} ₽</span>
                </div>
                <div className={s.string}>
                    Доставка <span>{formatValue(shipping)} ₽</span>
                </div>
                <div className={`${s.string} ${s.green} ${showPromo ? s.visible : s.hidden}`}>
                    Промокод <span>- {formatValue(promoCost)} ₽</span>
                </div>
                <div className={`${s.string} ${s.green} ${payRuby ? s.visible : s.hidden}`}>
                    Списание Ruby Coins <span>- {formatValue(ruby)} ₽</span>
                </div>
                <div className={s.line}></div>
                <div className={s.toPay}>
                    К оплате <div className={s.addition}>
                        <div className={s.ruby}>
                            +351 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                <path d="M7.12109 12.4201L0.141115 4.03315L3.44302 5.23129L7.12109 12.4201Z" fill="#F23E59" />
                                <path d="M7.12109 12.4201L14.0175 4.03315L10.7156 5.19498L7.12109 12.4201Z" fill="#CC1732" />
                                <path d="M7.11831 12.4201L10.7128 5.19498L3.39844 5.19498L7.11831 12.4201Z" fill="#E7213F" />
                                <path d="M10.7136 5.2313L7.11909 1.52801L11.8839 1.20126L10.7136 5.2313Z" fill="#E7334F" />
                                <path d="M3.40016 5.19502L2.31346 1.0923L7.12003 1.52798L3.40016 5.19502Z" fill="#FC4C67" />
                                <path d="M7.1186 1.52797L2.31203 1.09228L5.04085 0.754037L8.76072 0.754037L11.8834 1.2012L7.1186 1.52797Z" fill="#FF647B" />
                                <path d="M11.8827 1.20124L13.9683 4.11283L10.7124 5.19502L11.8827 1.20124Z" fill="#D8233E" />
                                <path d="M2.31425 1.09231L3.44275 5.23133L0.140847 4.03319L2.31425 1.09231Z" fill="#FF6078" />
                                <path d="M7.11831 1.52802L10.7128 5.19504H3.39844L7.11831 1.52802Z" fill="#F43754" />
                            </svg>
                        </div>
                        <div className={s.coin}>
                            {parseInt(price) + parseInt(shipping)} <GamlyCoin size={22} />
                        </div>
                    </div>
                </div>
                <SmallInput heading={'Промокод'} setShowPromo={setShowPromo} value={promo} setValue={setPromo} promo={true} placeholder={'Ваш промокод'} />
            </div>
            <div className={s.payment}>
                <div className={s.method}>Метод оплаты</div>

                <PaymentMethods selectedType={selectedType} setSelectedType={setSelectedType} />
            </div>

            <BottomMenu setPayRuby={setPayRuby} payRuby={payRuby} switcher={true}>
                <ButtonPrimary disabled={disabled} text={'Перейти к оплате'} />
            </BottomMenu>
        </div>
    )
}

export default Total;