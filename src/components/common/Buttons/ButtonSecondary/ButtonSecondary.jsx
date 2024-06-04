import s from './ButtonSecondary.module.scss';

const ButtonSecondary = ({ disabled, text, onClick, icon, small, medium }) => {
  return (
    <button onClick={onClick} className={`${s.button} ${small ? s.small : ''} ${medium && s.medium }`} disabled={disabled}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonSecondary;