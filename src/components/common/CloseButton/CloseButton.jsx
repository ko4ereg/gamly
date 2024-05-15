import s from './CloseButton.module.scss';
import close from './../../../assets/icons/close.svg';

const CloseButton = ({ onClick}) => {
    return (
        <div className={s.button} onClick={onClick}><img src={close} alt="" /></div>
    )
}

export default CloseButton;