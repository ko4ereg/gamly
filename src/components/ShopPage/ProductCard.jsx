import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './ShopPage.module.scss';
import Carousel from './Carousel/Carousel';
import { formatValue } from '../../utils/formatValue';


export const ProductCard = (props) => {
  const [inCart, setInCart] = useState(false);

  const [currentWidth, setCurrentWidth] = useState(0);
  const [width, setWidth] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  const handleAddToCart = () => {
    setInCart(!inCart);

  }

  const handleRef = useRef();

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWidth(handleRef.current.offsetWidth);
    }, 100);

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearTimeout(timer);
    }


  }, []);
 
  useEffect(() => {
    setCurrentWidth(handleRef.current.offsetWidth);
  }, [inCart, width]);

  const newPrice = props.product.discount ? props.product.price * (1 - props.product.discount / 100) : props.product.price;
  const actualPrice = formatValue(newPrice.toString()) + ' ₽';
console.log(props.product.discount);
  return (<div className={s.product_card}>
    {props.product.newPrice ? <div className={s.product_discont}>-30%</div> : null}
    <div className={s.product_img} >
      <Carousel img={props.product.img} />
    </div>
    <div className={s.product_title}> {props.product.title} </div>

    <div className={s.product_button_container} >

      <div onClick={handleAddToCart} className={`${s.product_button} ${inCart ? s.inCart : ''} `} style={{ width: currentWidth + (window.innerWidth <= 480 ? 54 : 56) }} >
        {inCart
          ? (<div className={s.product_button_price} ref={handleRef}  > <span>В корзине</span> </div>)
          : (<div className={s.product_button_price} ref={handleRef}  >   {props.product.discount ? <span>{actualPrice}</span> : null} {props.product.discount ? (<span className={s.oldprice}>{props.product.price}</span>) : (<span>{formatValue(props.product.price.toString()) + ' ₽'}</span>)} </div>)}

        <div className={`${s.plus} ${inCart ? s.minus : ''} `}>

          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 8 8">
            <rect className={s.verticalLine} fill="#D4EE5D" x="3.5" y="1" width="1" height="6" rx="0.5" ry="0.5" />
            <rect fill="#D4EE5D" x="1" y="3.5" width="6" height="1" rx="0.5" ry="0.5" />
          </svg>

        </div>

      </div>
      {inCart ?

        <div className={`${s.product_price} ${inCart ? s.activePrice : ''} `} >{actualPrice}</div> : null}


    </div>
  </div>
  );
}

export default ProductCard;




