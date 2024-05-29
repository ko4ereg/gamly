import s from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ disabled, text, icon, small }) => {
  return (
    <button className={`${s.button} ${small ? s.small : ''}`} disabled={disabled}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonPrimary;