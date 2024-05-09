import s from './ShopPage.module.scss';
import plus from './../../assets/icons/plus.svg';
import minus from './../../assets/icons/minus.svg';

export const ProductCard = (props) => {

    return <div className={s.product_card}>
        {props.product.newPrice ? <div className={s.product_discont}>-30%</div> : null}
      <div className={s.product_img} ><img   src={props.product.img} alt="" /></div>  
        <div className={s.product_title}>{props.product.title}</div>
        {props.product.inShip
            ? <div className={s.product_button_inShip}><div className={s.product_button }> <span>В корзине</span> <div className={s.plus}><img src={minus} alt="" /></div>  </div> {props.product.newPrice ? <span>{props.product.newPrice}</span> : null} {props.product.newPrice ? <span className={s.oldprice}>{props.product.price}</span> : <span>{props.product.price}</span>} </div> 
        : <div className={s.product_button}> {props.product.newPrice ? <span>{props.product.newPrice}</span> : null} {props.product.newPrice ? <span className={s.oldprice}>{props.product.price}</span> : <span>{props.product.price}</span>} <div className={s.plus}><img src={plus} alt="" /></div> </div>}
    </div>
}

export default ProductCard;