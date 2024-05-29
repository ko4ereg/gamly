import s from './SmallButton.module.scss'

const SmallButton = ({text, disabled, onClick}) => {
    return (
        <button className={s.button} onClick={onClick} disabled={disabled}>{text}</button>
    )
}

export default SmallButton;