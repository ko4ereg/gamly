import React, { useEffect, useRef, useState } from 'react';
import s from './ProductCard.module.scss';
import Carousel from '../Carousel/Carousel';
import { formatValue } from '../../../utils/formatValue';
import { NavLink } from 'react-router-dom';



export const ProductCard = (props) => {
  const [inCart, setInCart] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [currentWidth, setCurrentWidth] = useState(0);



  const handleAddToCart = () => {
    setInCart(!inCart);
  }


  const handleRef = useRef();


  useEffect(() => {
    if (firstRender) {
      setCurrentWidth(handleRef.current.offsetWidth + 4);
      setFirstRender(false);

    } else {
      setCurrentWidth(handleRef.current.offsetWidth);

    }
  }, [inCart, props])



  const newPrice = props.product.discount ? props.product.price * (1 - props.product.discount / 100) : props.product.price;

  const actualPrice = formatValue(newPrice.toString()) + ' ₽';



  return (<div className={s.product_card}>
    {props.product.discount ? <div className={s.product_discont}>-{props.product.discount}%</div> : null}
    <div className={s.product_img} >
      <Carousel img={props.product.img} />
    </div>
    <NavLink to={`/shop/${props.product.id}`}> <div className={s.product_title}> {props.product.title} </div></NavLink>

    <div className={s.product_button_container} >

      <div onClick={handleAddToCart} className={`${s.product_button} ${inCart ? s.inCart : ''} `}
        style={{ width: currentWidth + (window.innerWidth <= 480 ? 54 : 56) }}
      // style={{  width: window.innerWidth >= 480 ? currentWidth + (window.innerWidth >= 768 ? 56 : 54) : '100%'  }}
      >
        {inCart
          ? (<div className={s.product_button_price} ref={handleRef}><span>В корзине</span></div>)
          : (<div className={s.product_button_price} ref={handleRef}  >   {props.product.discount ? <span>{actualPrice}</span> : null} {props.product.discount ? (<span className={s.oldprice}>{actualPrice}</span>) : (<span>{actualPrice}</span>)} </div>)}


        <div className={`${s.plus} ${inCart ? s.minus : ''} `}>

          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 8 8">
            <rect className={s.verticalLine} fill="#D4EE5D" x="3.5" y="1" width="1" height="6" rx="0.5" ry="0.5" />
            <rect fill="#D4EE5D" x="1" y="3.5" width="6" height="1" rx="0.5" ry="0.5" />
          </svg>

        </div>

      </div>


      <div className={`${s.product_price} ${inCart ? s.activePrice : ''} `} >{actualPrice}</div>





    </div>


  </div>

  );
}

export default ProductCard;




