import Banner from '../../common/Banner/Banner';
import BigInput from '../../common/BigInput/BigInput';
import s from './BottomContainer.module.scss';
import ButtonPrimary from '../../common/Buttons/ButtonPrimary/ButtonPrimary';
import Commision from './Commision/Commision';
import { Controller, useForm } from 'react-hook-form';
import { formatValue, unformatValue } from '../../../utils/formatValue';

const BottomContainer = ({ link, setLink, priceWithoutFormat, setPriceWithoutFormat, login, setLogin, promo, price, setPrice, setPromo, ...props }) => {
    const { register, handleSubmit, control, setValue, getValues, clearErrors, formState: { errors } } = useForm({});

    // const disabled = Object.keys(errors).length !== 0;

    const disabled = props.selectedType === 'skins' ? !getValues("price") || !getValues('link') : !getValues("price") || !getValues('login');

    const onSubmit = (data) => {
        const price = unformatValue(data.price);
        data.link && setLink(data.link);
        data.login && setLogin(data.link);
        setPrice(data.price);
        console.log(data);
    }



    const handleChangeInput = (e) => {
        const formattedValue = formatValue(e.target.value);
        setValue('price', formattedValue);
        setPriceWithoutFormat(parseInt(unformatValue(e.target.value)));
    }

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
                <form onSubmit={handleSubmit(onSubmit)} className={s.inputsContainer}>
                    {props.selectedType === 'skins'
                        &&

                        <Controller
                            control={control}
                            name="link"
                            defaultValue=''
                            rules={{ required: true }}
                            render={({ field, fieldState: { isDirty, isTouched } }) => (
                                <BigInput
                                    tooltipText={'Введите ссылку'}
                                    invalid={isDirty && !field.value} // Устанавливаем invalid в true, если поле пустое и пользователь его потрогал
                                    onBlur={() => {
                                        if (!field.value) {
                                            field.onChange('');
                                            // Если поле пустое, установить значение пустой строки
                                        }
                                    }}
                                    onFocus={() => {
                                        if (isDirty && !field.value) {
                                            clearErrors("link"); // Очистить ошибку по имени поля
                                        }
                                         
                                    }}
                               
                                    value={field.value}
                                    onChange={field.onChange}
                                    heading={'Ссылка на обмен'} placeholder={'Ваша трейд-ссылка'} />
                            )}
                        />
                    }
                    {props.selectedType === 'balance' &&
                        <Controller
                            control={control}
                            name="login"
                            defaultValue=''
                            rules={{ required: true }}
                            render={({ field, fieldState: { isDirty } }) => (
                                <BigInput
                                    tooltipText={'Требуется ваш логин'}
                                    invalid={isDirty && !field.value} // Устанавливаем invalid в true, если поле пустое и пользователь его потрогал
                                    onBlur={() => {
                                        if (!field.value) {
                                            field.onChange('');
                                            // Если поле пустое, установить значение пустой строки
                                        }
                                    }}
                                    onFocus={() => {
                                        if (isDirty && !field.value) {
                                            clearErrors("login"); // Очистить ошибку по имени поля
                                        }
                                    }}
                                    value={field.value}
                                    onChange={(e) => { setLogin(e.target.value); setValue('login', e.target.value) }}
                                    heading={'Логин Steam*'} placeholder={'Ваш логин Steam'} />
                            )}
                        />

                    }

                    <div className={s.inputs}>
                        <Controller
                            control={control}
                            name="price"
                            defaultValue=''
                            rules={{ required: true }}
                            render={({ field, fieldState: { isDirty } }) => (
                                <BigInput
                                    tooltipText={'столько вы получите'}
                                    invalid={isDirty && !field.value} // Устанавливаем invalid в true, если поле пустое и пользователь его потрогал
                                    onBlur={() => {
                                        if (!field.value) {
                                            field.onChange('');
                                            // Если поле пустое, установить значение пустой строки
                                        }
                                    }}
                                    onFocus={() => {
                                        if (isDirty && !field.value) {
                                            clearErrors("price"); // Очистить ошибку по имени поля
                                        }
                                    }}
                                    value={field.value}
                                    onChange={handleChangeInput}
                                    number={true}
                                    heading={'Сумма к получению*'} placeholder={'0'} />
                            )}
                        />
                        <BigInput
                            tooltipText={'промокод на скидку'}
                            value={promo}
                            onChange={setPromo}
                            heading={'Промокод'}
                            placeholder={'Промокод'}
                            promo={true}
                        />
                    </div>
                    {props.selectedType === 'skins'
                        ? <div className={s.info}>При получении баланса скинами вы получаете предметы на свой Steam профиль, которые вы сможете продать по минимальному запросу на покупку торговой площадки</div>
                        : <Commision sum={priceWithoutFormat} />}

                </form>
                <div className={s.button}>
                    <div className={s.buttonItem}> <ButtonPrimary onClick={async () => {
                        await handleSubmit(onSubmit)();
                        props.setPopupActive(true);

                    }}
                        disabled={disabled} text={'Пополнить Steam'} /></div>
                    <div className={s.cost}>
                        <div className={s.toPay}>К оплате</div>
                        <div className={s.coins}>{Math.floor(priceWithoutFormat * 0.95) || 0} <div className={s.coin}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <rect y="0.5" width="24" height="24" rx="12" fill="#343D33" />
                            <path d="M14.4178 14.2712H17.7714C17.413 17.1896 15.0322 19.1608 11.9858 19.1608C8.5554 19.1608 6.2002 16.8824 6.2002 12.3768C6.2002 7.87121 8.5554 5.90001 12.0882 5.90001C15.365 5.90001 17.5922 7.76881 17.797 10.7384H14.4434C14.2642 9.43281 13.317 8.66481 12.0626 8.66481C10.6546 8.66481 9.5026 9.56081 9.5026 12.3C9.5026 15.0392 10.6546 16.3704 11.9602 16.3704C13.2658 16.3704 14.2898 15.628 14.4178 14.2712Z" fill="#D4EE5D" />
                        </svg></div> </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BottomContainer;