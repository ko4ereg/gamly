 
import s from './SuccesPopupContent.module.scss';
 

const SuccesPopupContent = ({coins}) => {
 



  return (
    
    <div className={s.content}>
        <div className={s.text}>
        <div className={s.title}>Спасибо за заказ!</div>
        <div className={s.subtitle}>Заказ #1569598400 на сумму {coins} gamly coin принят. Скины придут в течение ~10 минут.</div>
        </div>
        <div className={s.img}></div>
    </div>
  )
}

export default SuccesPopupContent;