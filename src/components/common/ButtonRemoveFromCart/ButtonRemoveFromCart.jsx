import s from './ButtonRemoveFromCart.module.scss';
import cartminus from './../../../assets/icons/cartminus.svg';
const ButtonRemoveFromCart = ({ disabled, text, onClick }) => {
  return (
    <button onClick={onClick} className={s.button} disabled={disabled}>
      <img src={cartminus} alt="" />
      {text}
    </button>
  )
}

export default ButtonRemoveFromCart;