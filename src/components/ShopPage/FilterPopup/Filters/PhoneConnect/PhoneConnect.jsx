import RadioButton from '../../../../common/RadioButton';
 


const PhoneConnect = ({ isChecked, setIsChecked, value }) => {

    return (

        <div >
            Можно подключить к телефону
            <RadioButton isChecked={isChecked} setIsChecked={setIsChecked} value={value} />
        </div>
 
    )
}

export default PhoneConnect;