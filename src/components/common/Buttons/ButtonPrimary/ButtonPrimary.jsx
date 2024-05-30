import s from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ disabled, text, icon, small, onClick }) => {
  return (
    <button onClick={onClick} className={`${s.button} ${small ? s.small : ''}`} disabled={disabled}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonPrimary;