import s from './Wires.module.scss';
import g from './../../FilterPopup.module.scss';
import Checkbox from "../../../../common/Checkbox";
import TextButtonC2 from '../../../../common/TextButtonC2/TextButtonC2';



const Wired = (props) => {

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
        props.setIsChecked('');
    }

    return (
        <div className={g.filter}>
            <div className={g.filterHeading}><h4>Подключение</h4> <TextButtonC2 onClick={handleFilterReset} text={'Сбросить'} /></div>

            <div className={s.container}>
                <Checkbox isChecked={props.isChecked.includes('wires')} setIsChecked={() => handleCheckboxChange('wires')} value={'wires'}>{'Проводные'}</Checkbox>
                <Checkbox isChecked={props.isChecked.includes('wireless')} setIsChecked={() => handleCheckboxChange('wireless')} value={'wireless'}>{'Беспроводные'}</Checkbox>
            </div>
        </div>
    )
}

export default Wired;