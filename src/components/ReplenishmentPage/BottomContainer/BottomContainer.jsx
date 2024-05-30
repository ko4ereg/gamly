
import { useState } from 'react';
import Banner from '../../common/Banner/Banner';
import BigInput from '../../common/BigInput/BigInput';
import s from './BottomContainer.module.scss';
import ButtonPrimary from '../../common/Buttons/ButtonPrimary/ButtonPrimary';
import GamlyCoin from '../../common/GamlyCoin/GamlyCoin';
import Commision from './Commision/Commision';



const BottomContainer = ({ link, setLink, priceWithoutFormat, setPriceWithputFormat, login, setLogin, promo, price, setPrice, setPromo, ...props }) => {

    // const [link, setLink] = useState('');
  
    // const [login, setLogin] = useState('');

    // const [promo, setPromo] = useState('');
    // const [priceWithoutFormat, setPriceWithputFormat] = useState(0);
    const disabled = props.selectedType === 'skins' ? !link || !price : !login || !price;


    return (
        <div className={s.container}>
            <div className={s.banners}>
                <Banner
                    title={'Получи +5% к пополнению'}
                    text={'за аватарку и никнейм нашего сайта'}
                    buttonText={'Подробнее'}
                    gradient={true}
                />
                <Banner
                    title={'Акции и конкурсы'}
                    buttonText={'Перейти'}
                />

            </div>

            <div className={s.mainContent}>
                <div className={s.inputsContainer}>
                    {props.selectedType === 'skins'
                        ? <BigInput
                            tooltipText={'Введите ссылку'}
                            value={link}
                            setValue={setLink}
                            heading={'Ссылка на обмен*'}
                            placeholder={'Ваша трейд-ссылка'} />
                        : <BigInput
                            tooltipText={'Требуется ваш логин'}
                            value={login}
                            setValue={setLogin}
                            heading={'Логин Steam*'}
                            placeholder={'Ваш логин Steam'} />
                    }

                    <div className={s.inputs}>
                        <BigInput
                            tooltipText={'столько вы получите aaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaa aaaaa'}
                            value={price}
                            setValue={setPrice}
                            setPriceWithputFormat={setPriceWithputFormat}
                            heading={'Сумма к получению*'}
                            number={true}
                            placeholder={'0'}
                        />
                        <BigInput
                            tooltipText={'промокод на скидку'}
                            value={promo}
                            setValue={setPromo}
                            heading={'Промокод'}
                            placeholder={'Промокод'}
                            promo={true}
                        />
                    </div>
                    {props.selectedType === 'skins'
                        ? <div className={s.info}>При получении баланса скинами вы получаете предметы на свой Steam профиль, которые вы сможете продать по минимальному запросу на покупку торговой площадки</div>
                        : <Commision sum={priceWithoutFormat} />}
                </div>
                <div className={s.button}>
                    <div className={s.buttonItem}> <ButtonPrimary onClick={() => props.setPopupActive(true)} disabled={disabled} text={'Пополнить Steam'} /></div>
                    <div className={s.cost}>
                        <div className={s.toPay}>К оплате</div>
                        <div className={s.coins}>{Math.floor(priceWithoutFormat*0.95) || 0}<GamlyCoin /></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BottomContainer;