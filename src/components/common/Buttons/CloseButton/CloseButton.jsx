import s from './CloseButton.module.scss';
 

const CloseButton = ({ onClick, icon}) => {
    return (
        <div className={s.button} onClick={onClick}>{icon}</div>
    )
}

export default CloseButton;