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

const Delivery = () => {

    const [secondName, setSecondName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surName, setsurName] = useState('');
    const [selectedType, setSelectedType] = useState('point');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const [saveData, setSaveData] = useState(false);

    const [enter, setEnter] = useState('');
    const [floor, setFloor] = useState('');
    const [flat, setFlat] = useState('');
    const [code, setCode] = useState('');
    const [comment, setComment] = useState('');

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
        setAddress(value);
        if (value.trim() === '') {
            setFilteredAddresses([]);
            setShowResult(false);
        } else {
            const filtered = addresses.filter((addr) => addr.toLowerCase().includes(value.toLowerCase()));
            setFilteredAddresses(filtered);
            filteredAddresses.length > 0 && setShowResult(true);
        }
    }


    const handleClick = (address) => {
        setAddress(address);
        setShowResult(false);
    }

    const disabled = !secondName || !surName || !firstName || !phone || !email || !address;

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
                <div className={s.userInfo}>
                    <div className={s.inputs}>
                       <div className={s.input}> <SmallInput value={secondName} setValue={setSecondName} heading={'Фамилия'} placeholder={'Попов'} /></div>
                       <div className={s.input}>  <SmallInput value={firstName} setValue={setFirstName} heading={'Имя'} placeholder={'Иван'} /></div>
                       <div className={s.input}>    <SmallInput value={surName} setValue={setsurName} heading={'Отчество'} placeholder={'Александрович'} /></div>
                       <div className={s.input}>  <SmallInput value={phone} setValue={setPhone} heading={'Телефон'} placeholder={'+7 (000) 000-00-00'} /></div>
                       <div className={s.input}> <SmallInput value={email} setValue={setEmail} heading={'E-mail'} placeholder={'email@gmail.com'} /></div>
                    </div>

                </div>
                {selectedType === 'point' ? <div className={s.point}>
                    <div className={s.searchResults}>   <SmallInput heading={'Пункт выдачи'} note={'Приблизительное время доставки'} addInfo={'6-7 дней'} placeholder={'Укажите ближайший адрес или метро'} setValue={handleAddressChange} value={address} />
                        {showResult &&
                            // <ul>
                            //     {filteredAddresses.map((addr) => {
                            //         return <li onClick={() => handleClick(addr)} key={addr}>{addr}</li>
                            //     }
                            //     )}
                            // </ul>
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

                        <SmallInput heading={'Адрес доставки'} note={'Приблизительное время доставки'} addInfo={'6-7 дней'} placeholder={'Укажите ближайший адрес или метро'} setValue={handleAddressChange} value={address} />

                        <div className={s.address}>
                        <div className={s.input}>    <SmallInput heading={'Подъезд'} placeholder={'1'} setValue={setEnter} value={enter} /></div>
                        <div className={s.input}>  <SmallInput heading={'Этаж'} placeholder={'1'} setValue={setFloor} value={floor} /></div>
                        <div className={s.input}>    <SmallInput heading={'Квартира'} placeholder={'1'} setValue={setFlat} value={flat} /></div>
                        <div className={s.input}>   <SmallInput heading={'Домофон'} placeholder={'1'} setValue={setCode} value={code} /></div>
                        </div>
                        {/* <SmallInput heading={'Комментарий'} placeholder={'Комментарий курьеру'} setValue={setComment} value={comment} /> */}
                        <TextArea heading={'Комментарий'} placeholder={'Комментарий курьеру'} setValue={setComment} value={comment} />
                    </div>}

            </div>

            <div className={s.bottom}>
                <div className={s.saveChanges}>
                    <RoundCheckbox type={'saveData'} selectedType={saveData} onChange={setSaveData} /> <span onClick={() => setSaveData(!saveData)}>Сохранить данные для заполнения</span>
                </div>
                <ButtonPrimary disabled={disabled} text={'Сохранить изменения'} />
            </div>
        </div>
    )
}

export default Delivery;