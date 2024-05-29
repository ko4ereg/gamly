import s from './CloseButton.module.scss';
 

const CloseButton = ({ onClick, icon}) => {
    return (
        <div className={s.button} onClick={onClick}><img src={icon} alt="" /></div>
    )
}

export default CloseButton;