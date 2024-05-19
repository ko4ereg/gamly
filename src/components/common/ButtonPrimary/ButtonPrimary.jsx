import s from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ disabled, text, icon }) => {
  return (
    <button className={s.button} disabled={disabled}>
      {icon ? <img src={icon} alt="" /> : null}
      {text}
    </button>
  )
}

export default ButtonPrimary;