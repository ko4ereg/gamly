import s from './ButtonSecondary.module.scss';

const ButtonSecondary = ({ disabled, text, onClick, icon, small }) => {
  return (
    <button onClick={onClick} className={`${s.button} ${small ? s.small : ''}`} disabled={disabled}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonSecondary;