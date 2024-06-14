import { useState } from 'react';
import { formatValue } from '../../../utils/formatValue';

import s from './Delivery.module.scss';
import Tabs from '../../common/Tabs/Tabs';
import SmallInput from '../../common/SmallInput/SmallInput';
import SmallTab from '../../common/SmallTab/SmallTab';
import RoundCheckbox from '../../common/RoundCheckbox/RoundCheckbox';
import ButtonPrimary from '../../common/Buttons/ButtonPrimary/ButtonPrimary';
import TextArea from '../../common/TextArea/TextArea';
import SearchResults from '../../common/SearchResults/SearchResults';
import SmallInputPhone from '../../common/SmallInput/SmallInputPhone';
import { Controller, useForm } from 'react-hook-form';


const Delivery = () => {

    const [selectedType, setSelectedType] = useState('point');
    const [saveData, setSaveData] = useState(false);

    const addresses = [
        'Свердловская область, Екатеринбург, ул. Циолковского 27',
        'Свердловская область, Екатеринбург, ул. Циолковского 12',
        'Свердловская область, Екатеринбург, ул. Машиностроителей 27',
        'Свердловская область, Екатеринбург, ул. Машиностроителей 12',
        'Свердловская область, Екатеринбург, ул. Саввы Белых 27',
        'Свердловская область, Екатеринбург, ул. Высоцкого 12',
        'Свердловская область, Екатеринбург, ул. проспект Космонавтов 27',
        'Свердловская область, Екатеринбург, ул. Ельцина 12',
    ]

    const [filteredAddresses, setFilteredAddresses] = useState([]);
    const [showResult, setShowResult] = useState(false);
 
    const handleAddressChange = (value) => {
        if (value.trim() === '') {
            setFilteredAddresses([]);
            setShowResult(false);
        } else {
            const filtered = addresses.filter((addr) => addr.toLowerCase().includes(value.toLowerCase()));
            setFilteredAddresses(filtered);
            filteredAddresses.length > 0 && setShowResult(true);
        }
    }


    const { handleSubmit, control, setValue,getValues, formState: { errors } } = useForm({});

    const handleClick = (address) => {
        setValue('addressPoint', address);
        setShowResult(false);
    }


 
    const disabled =  !getValues("secondName") || !getValues("firstName") || !getValues("surName") || !getValues("phone") || !getValues("email") || selectedType === 'point' 
    ? !getValues("addressPoint") : !getValues("addressHome") || !getValues("flat") || !getValues("floor") || !getValues('enter');
    

    const onSubmit = (data) => console.log(data)


    return (
        <div className={s.container}>
            <div className={s.top}>
                <div className={s.heading}>
                    <div className={s.heading_top}>
                        <div className={s.title}>Доставка СДЭК</div>
                        <div className={s.price}>{formatValue('1209')} ₽</div>
                    </div>
                    <div className={s.sizes}>
                        <span>30 × 40 См</span> <span>800 грамм</span>
                    </div>
                </div>
                <Tabs>
                    <SmallTab setSelectedType={setSelectedType} selected={selectedType} type={'point'} text={'Получение в пункте выдачи'} />
                    <SmallTab setSelectedType={setSelectedType} selected={selectedType} type={'courier'} text={'Получение курьером'} />
                </Tabs>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.userInfo}>
                        <div className={s.inputs}>
                            <div className={s.input}>
                                <Controller
                                    control={control}
                                    name="secondName"
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field, fieldState: { isDirty } }) => (
                                        <SmallInput

                                            invalid={isDirty && !field.value} // Устанавливаем invalid в true, если поле пустое и пользователь его потрогал
                                            onBlur={() => {
                                                if (!field.value) {
                                                    field.onChange('');
                                                    // Если поле пустое, установить значение пустой строки
                                                }
                                            }}
                                            value={field.value}
                                            onChange={field.onChange}
                                            heading={'Фамилия'} placeholder={'Попов'} />
                                    )}
                                />

                                {/* <SmallInput value={secondName} setValue={setSecondName} heading={'Фамилия'} placeholder={'Попов'} /> */}

                            </div>
                            <div className={s.input}>
                                <Controller
                                    control={control}
                                    name="firstName"
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field, fieldState: { isDirty } }) => (
                                        <SmallInput
                                            invalid={isDirty && !field.value}
                                            onBlur={() => {
                                                if (!field.value) {
                                                    field.onChange('');

                                                }
                                            }}
                                            value={field.value}
                                            onChange={field.onChange}
                                            heading={'Имя'} placeholder={'Иван'} />
                                    )}
                                />
                                {/* <SmallInput value={firstName} setValue={setFirstName} heading={'Имя'} placeholder={'Иван'} /> */}
                            </div>
                            <div className={s.input}>
                                <Controller
                                    control={control}
                                    name="surName"
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field, fieldState: { isDirty } }) => (
                                        <SmallInput
                                            invalid={isDirty && !field.value}
                                            onBlur={() => {
                                                if (!field.value) {
                                                    field.onChange('');

                                                }
                                            }}
                                            value={field.value}
                                            onChange={field.onChange}
                                            heading={'Отчество'} placeholder={'Александрович'} />
                                    )}
                                />
                                {/* <SmallInput value={surName} setValue={setsurName} heading={'Отчество'} placeholder={'Александрович'} /> */}

                            </div>
                            <div className={s.input}>
                                <Controller
                                    control={control}
                                    name="phone"
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field, fieldState: { isDirty } }) => (
                                        <SmallInputPhone
                                            invalid={(isDirty && !field.value)}
                                            onBlur={() => {
                                                if (!field.value) {
                                                    field.onChange('');
                                                }

                                            }}
                                            value={field.value}
                                            onChange={field.onChange}
                                            heading={'Телефон'} placeholder={'+7 (000) 000-00-00'} />
                                    )}
                                />
                                {/* <SmallInputPhone value={phone} setValue={setPhone} heading={'Телефон'} placeholder={'+7 (000) 000-00-00'} /> */}


                            </div>
                            <div className={s.input}>
                                <Controller
                                    control={control}
                                    name="email"
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field, fieldState: { isDirty } }) => (
                                        <SmallInput
                                            invalid={isDirty && !field.value}
                                            onBlur={() => {
                                                if (!field.value) {
                                                    field.onChange('');

                                                }
                                            }}
                                            value={field.value}
                                            onChange={field.onChange}
                                            heading={'E-mail'} placeholder={'email@gmail.com'} />
                                    )}
                                />
                            </div>
                        </div>

                    </div>
                    {selectedType === 'point' ? <div className={s.point}>
                        <div className={s.searchResults}>
                            <Controller
                                control={control}
                                name="addressPoint"
                                defaultValue=''
                                rules={{ required: true }}
                                render={({ field, fieldState: { isDirty } }) => (
                                    <SmallInput heading={'Пункт выдачи'}
                                        note={'Приблизительное время доставки'}
                                        addInfo={'6-7 дней'}
                                        invalid={isDirty && !field.value}
                                        onBlur={() => {
                                            if (!field.value) {
                                                field.onChange('');

                                            }
                                        }}
                                        placeholder={'Укажите ближайший адрес или метро'}
                                        value={field.value}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            handleAddressChange(e.target.value);
                                        }}
                                    />
                                )}
                            />
                            {showResult &&
                                <SearchResults>
                                    {filteredAddresses.map((addr) => {
                                        return <li onClick={() => handleClick(addr)} key={addr}>{addr}</li>
                                    }
                                    )}
                                </SearchResults>
                            }
                        </div>
                        <div className={s.map}></div>
                    </div>
                        :
                        <div className={s.point}>
                            <Controller
                                control={control}
                                name="addressHome"
                                rules={{ required: true }}
                                defaultValue=''
                                render={({ field, fieldState: { isDirty } }) => (
                                    <SmallInput
                                        invalid={isDirty && !field.value}
                                        onBlur={() => {
                                            if (!field.value) {
                                                field.onChange('');

                                            }
                                        }}
                                        value={field.value}
                                        onChange={field.onChange}
                                        heading={'Адрес доставки'}
                                        note={'Приблизительное время доставки'}
                                        addInfo={'6-7 дней'}
                                        placeholder={'Укажите ближайший адрес или метро'} />
                                )}
                            />
                            <div className={s.address}>
                                <div className={s.input}>
                                    <Controller
                                        control={control}
                                        name="enter"
                                        defaultValue=''
                                        rules={{ required: true }}
                                        render={({ field, fieldState: { isDirty } }) => (
                                            <SmallInput
                                                invalid={isDirty && !field.value}
                                                onBlur={() => {
                                                    if (!field.value) {
                                                        field.onChange('');

                                                    }
                                                }}
                                                value={field.value}
                                                onChange={field.onChange}
                                                heading={'Подъезд'} placeholder={'1'} />
                                        )}
                                    />
                                </div>
                                <div className={s.input}>
                                    <Controller
                                        control={control}
                                        name="floor"
                                        defaultValue=''
                                        rules={{ required: true }}
                                        render={({ field, fieldState: { isDirty } }) => (
                                            <SmallInput
                                                invalid={isDirty && !field.value}
                                                onBlur={() => {
                                                    if (!field.value) {
                                                        field.onChange('');

                                                    }
                                                }}
                                                value={field.value}
                                                onChange={field.onChange}
                                                heading={'Этаж'} placeholder={'1'} />
                                        )}
                                    />
                                </div>
                                <div className={s.input}>
                                    <Controller
                                        control={control}
                                        name="flat"
                                        defaultValue=''
                                        rules={{ required: true }}
                                        render={({ field, fieldState: { isDirty } }) => (
                                            <SmallInput
                                                invalid={isDirty && !field.value}
                                                onBlur={() => {
                                                    if (!field.value) {
                                                        field.onChange('');

                                                    }
                                                }}
                                                value={field.value}
                                                onChange={field.onChange}
                                                heading={'Квартира'} placeholder={'1'} />
                                        )}
                                    />
                                </div>
                                <div className={s.input}>
                                    <Controller
                                        control={control}
                                        name="code"
                                        defaultValue=''
                                        rules={{ required: true }}
                                        render={({ field, fieldState: { isDirty } }) => (
                                            <SmallInput
                                                invalid={isDirty && !field.value}
                                                onBlur={() => {
                                                    if (!field.value) {
                                                        field.onChange('');

                                                    }
                                                }}
                                                value={field.value}
                                                onChange={field.onChange}
                                                heading={'Домофон'} placeholder={'1'} />
                                        )}
                                    />
                                </div>
                            </div>
                            <Controller
                                control={control}
                                name="comment"
                                defaultValue=''
                                render={({ field }) => (
                                    <TextArea
                                        value={field.value}
                                        onChange={field.onChange}
                                        heading={'Комментарий'} placeholder={'Комментарий курьеру'} />
                                )}
                            />
                        </div>}
                </form>
            </div>

            <div className={s.bottom}>
                <div className={s.saveChanges}>
                    <RoundCheckbox type={'saveData'} selectedType={saveData} onChange={setSaveData} /> <span onClick={() => setSaveData(!saveData)}>Сохранить данные для заполнения</span>
                </div>
                <ButtonPrimary
                    onClick={handleSubmit(onSubmit)}
                    disabled={disabled} 
                    text={'Сохранить изменения'} />
            </div>
        </div>
    )
}

export default Delivery;