import RadioButton from '../../../../common/RadioButton';
import s from './PhoneConnect.module.scss';


const PhoneConnect = ({ isChecked, setIsChecked, value }) => {

    return (

        <div className={s.connectPhone}>
            Можно подключить к телефону
            <RadioButton isChecked={isChecked} setIsChecked={setIsChecked} value={value} />
        </div>
 
    )
}

export default PhoneConnect;