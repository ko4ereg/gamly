import s from './ButtonSuccesPopup.module.scss';

const ButtonSuccesPopup = ({ disabled, text, onClick, icon, small }) => {
  return (
    <button onClick={onClick} className={`${s.button} ${small ? s.small : ''}`} disabled={disabled}>
      {icon}
      {text}
    </button>
  )
}

export default ButtonSuccesPopup;