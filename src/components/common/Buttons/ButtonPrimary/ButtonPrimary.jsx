import s from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ disabled, text, icon, small, onClick, medium }) => {
  return (
    <button onClick={onClick} className={`${s.button} ${small ? s.small : ''} ${medium && s.medium }`} disabled={disabled}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonPrimary;