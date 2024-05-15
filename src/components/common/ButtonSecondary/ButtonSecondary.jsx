import s from './ButtonSecondary.module.scss';

  const ButtonSecondary = ({disabled, text, onClick}) => {
    return (
        <button onClick={onClick} className={s.button} disabled={disabled}>{text}</button>
    )
}

export default ButtonSecondary;