import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './ShopPage.module.scss';
import Carousel from './Carousel/Carousel';


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



  return (<div className={s.product_card}>
    {props.product.newPrice ? <div className={s.product_discont}>-30%</div> : null}
    <div className={s.product_img} >
      <Carousel img={props.product.img} />
    </div>
    <div className={s.product_title}>{props.product.title}</div>

    <div className={s.product_button_container} >

      <div onClick={handleAddToCart} className={s.product_button} style={{ width: currentWidth + (window.innerWidth < 375 ? 44 : window.innerWidth < 480 ? 48 : 55) }} >
        {inCart
          ? (<div className={s.product_button_price} ref={handleRef}  > <span>В корзине</span> </div>)
          : (<div className={s.product_button_price} ref={handleRef}  >   {props.product.newPrice ? <span>{props.product.newPrice}</span> : null} {props.product.newPrice ? (<span className={s.oldprice}>{props.product.price}</span>) : (<span>{props.product.price}</span>)} </div>)}

        <div className={`${s.plus} ${inCart ? s.minus : ''} `}>

          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 8 8">
            <rect className={s.verticalLine} fill="#D4EE5D" x="3.5" y="1" width="1" height="6" rx="0.5" ry="0.5" />
            <rect fill="#D4EE5D" x="1" y="3.5" width="6" height="1" rx="0.5" ry="0.5" />
          </svg>

        </div>

      </div>
{inCart ?  (props.product.newPrice ?
          <div className={`${s.product_price} ${inCart ? s.activePrice : ''} `} >{props.product.newPrice}</div> :
          <div className={`${s.product_price} ${inCart ? s.activePrice : ''} `} >{props.product.price}</div>) : null}
 

    </div>
  </div>
  );
}

export default ProductCard;




