import s from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ disabled, text, icon }) => {
  return (
    <button className={s.button} disabled={disabled}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonPrimary;