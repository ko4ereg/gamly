import s from './ButtonPrimary.module.scss';

  const ButtonPrimary = ({disabled, text}) => {
    return (
        <button className={s.button} disabled={disabled}>{text}</button>
    )
}

export default ButtonPrimary;