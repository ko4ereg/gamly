// import s from './ShopPage.module.scss';
 

// export const ProductCard = (props) => {



    // return <div className={s.product_card}>
    //     {props.product.newPrice ? <div className={s.product_discont}>-30%</div> : null}
    //   <div className={s.product_img} ><img   src={props.product.img} alt="" /></div>  
    //     <div className={s.product_title}>{props.product.title}</div>
//         {props.product.inShip
//             ? <div className={s.product_button_inShip}><div className={s.product_button }> <span>В корзине</span> <div className={s.plus}>–</div>  </div> {props.product.newPrice ? <span>{props.product.newPrice}</span> : null} {props.product.newPrice ? <span className={s.oldprice}>{props.product.price}</span> : <span>{props.product.price}</span>} </div> 
//         : <div className={s.product_button}> {props.product.newPrice ? <span>{props.product.newPrice}</span> : null} {props.product.newPrice ? <span className={s.oldprice}>{props.product.price}</span> : <span>{props.product.price}</span>} <div className={s.plus}>+</div>  </div>}
//     </div>
// }

// export default ProductCard; 

 
import React, {  useEffect, useRef, useState } from 'react';
import s from './ShopPage.module.scss';
 
 

export const ProductCard = (props) => {
    const [inCart, setInCart] = useState(false);
 
    const [currentWidth, setCurrentWidth] = useState('auto');
    
    const handleAddToCart = () => {
        setInCart(!inCart);
    }
  
    const handleRef = useRef();
 
    useEffect(() => {
        setCurrentWidth(handleRef.current.offsetWidth);
        console.log(currentWidth);
      }, [inCart]);
  

    return (<div className={s.product_card}>
    {props.product.newPrice ? <div className={s.product_discont}>-30%</div> : null}
  <div className={s.product_img} ><img   src={props.product.img} alt="" /></div>  
    <div className={s.product_title}>{props.product.title}</div>
    
   <div className={s.product_button_container} >
 
    <div onClick={handleAddToCart}   className={ s.product_button} style={{width: currentWidth + (window.innerWidth < 375 ?  49 : 56)}} > 
    <div className={s.product_button_price} ref={handleRef}  >
    {inCart 
    ? ( <span>В корзине</span> ) 
    : ( <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}> {props.product.newPrice ? <span>{props.product.newPrice}</span> : null} {props.product.newPrice ? ( <span className={s.oldprice}>{props.product.price}</span> ) : ( <span>{props.product.price}</span> )} </div> )} 
   
    <div className={s.plus}>{inCart ? '-' : '+'}</div> 
    </div>
    </div>
    {inCart ? 
  (props.product.newPrice ? 
    <span className= {s.product_price} >{props.product.newPrice}</span> : 
    <span className={ s.product_price} >{props.product.price}</span>) 
  : null}
     {/* <div className={s.price_inCart}>{inCart ? (props.product.newPrice ? <span>{props.product.newPrice}</span> : <span>{props.product.price}</span>) : null}</div>  */}
   </div>  


        </div>
    );
}

export default ProductCard;






{/* 
<div className={s.product_button_container} >
 
    <div onClick={handleAddToCart}     className={`${s.product_button} ${inCart ? s.inCart : '' }`}> 
    {inCart 
    ? <span>В корзине</span>  
    :    <span>3809Р</span>  } 
      
     </div>

   </div> */}