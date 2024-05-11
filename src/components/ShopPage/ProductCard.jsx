import React, { useEffect, useRef, useState } from 'react';
import s from './ShopPage.module.scss';
import Carousel from './Carousel/Carousel';

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
    <div className={s.product_img} >
    <Carousel img={props.product.img}/>
    </div>
    <div className={s.product_title}>{props.product.title}</div>

    <div className={s.product_button_container} >

      <div onClick={handleAddToCart} className={s.product_button} style={{ width: currentWidth + (window.innerWidth < 375 ? 44 : window.innerWidth < 480 ? 48 : 55) }} >
        {inCart
          ? (<div className={s.product_button_price} ref={handleRef}  > <span>В корзине</span> </div>)
          : (<div className={s.product_button_price} ref={handleRef}  >   {props.product.newPrice ? <span>{props.product.newPrice}</span> : null} {props.product.newPrice ? (<span className={s.oldprice}>{props.product.price}</span>) : (<span>{props.product.price}</span>)} </div>)}

        <div className={s.plus}>{inCart ? '-' : '+'}</div>

      </div>
      {inCart ?
        (props.product.newPrice ?
          <span className={s.product_price} >{props.product.newPrice}</span> :
          <span className={s.product_price} >{props.product.price}</span>)
        : null}

    </div>
  </div>
  );
}

export default ProductCard;




 