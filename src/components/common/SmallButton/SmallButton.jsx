import s from './SmallButton.module.scss'

const SmallButton = ({text, disabled}) => {
    return (
        <button className={s.button} disabled={disabled}>{text}</button>
    )
}

export default SmallButton;