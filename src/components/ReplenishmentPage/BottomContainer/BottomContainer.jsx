
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
                            tooltipText={'столько вы получите'}
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
                        <div className={s.coins}>{Math.floor(priceWithoutFormat * 0.95) || 0} <div className={s.coin}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <rect y="0.5" width="24" height="24" rx="12" fill="#343D33"/>
  <path d="M14.4178 14.2712H17.7714C17.413 17.1896 15.0322 19.1608 11.9858 19.1608C8.5554 19.1608 6.2002 16.8824 6.2002 12.3768C6.2002 7.87121 8.5554 5.90001 12.0882 5.90001C15.365 5.90001 17.5922 7.76881 17.797 10.7384H14.4434C14.2642 9.43281 13.317 8.66481 12.0626 8.66481C10.6546 8.66481 9.5026 9.56081 9.5026 12.3C9.5026 15.0392 10.6546 16.3704 11.9602 16.3704C13.2658 16.3704 14.2898 15.628 14.4178 14.2712Z" fill="#D4EE5D"/>
</svg></div> </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BottomContainer;