import s from './Wires.module.scss';


import TextButtonC2 from '../../Buttons/TextButtonC2/TextButtonC2';
import Checkbox from '../../Checkbox';




const Wires = (props) => {

    const handleCheckboxChange = (value) => {

        if (props.isChecked.includes(value)) {
            const newOptions = props.isChecked.filter((item) => item !== value);
            props.setIsChecked(newOptions);

        } else {
            const newOptions = [...props.isChecked, value];
            props.setIsChecked(newOptions);
        }
    }

    const handleFilterReset = () => {
        props.setIsChecked([]);
    }

    return (
        <div className={s.container}>
            <div className={s.heading}>
                Подключение
                <TextButtonC2 hidden={props.isChecked.length === 0} onClick={handleFilterReset} text={'Сбросить'} /></div>

            <div className={s.checkboxs}>
                <Checkbox isChecked={props.isChecked.includes('wires')} setIsChecked={() => handleCheckboxChange('wires')} value={'wires'}>{'Проводные'}</Checkbox>
                <Checkbox isChecked={props.isChecked.includes('wireless')} setIsChecked={() => handleCheckboxChange('wireless')} value={'wireless'}>{'Беспроводные'}</Checkbox>
            </div>
        </div>
    )
}

export default Wires;