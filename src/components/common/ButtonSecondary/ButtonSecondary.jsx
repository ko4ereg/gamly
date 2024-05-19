import s from './ButtonSecondary.module.scss';

const ButtonSecondary = ({ disabled, text, onClick, icon }) => {
  return (
    <button onClick={onClick} className={s.button} disabled={disabled}>
      {icon ? <img src={icon} alt="" /> : null}
      {text}
    </button>
  )
}

export default ButtonSecondary;