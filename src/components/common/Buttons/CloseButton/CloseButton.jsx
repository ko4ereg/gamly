import s from './CloseButton.module.scss';
 

const CloseButton = ({ onClick, icon, disabled}) => {
    return (
        <div className={`${s.button} ${disabled && s.disabled}`} onClick={onClick}>{icon}</div>
    )
}

export default CloseButton;