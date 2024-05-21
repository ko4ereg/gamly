import s from './ButtonRemoveFromCart.module.scss';
import cartminus from './../../../assets/icons/cartminus.svg';


const img = new Image();
img.src = cartminus;
const ButtonRemoveFromCart = ({ disabled, text, onClick }) => {
  return (
    <button onClick={onClick} className={s.button} disabled={disabled}>
      <img src={cartminus} alt="" />
      {text}
    </button>
  )
}

export default ButtonRemoveFromCart;