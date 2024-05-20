
import { useState } from 'react';
import ModalCarousel from '../ModalCarousel/ModalCarousel';
import s from './../Product.module.scss';
import Carousel from './Carousel';
const ProductCarousel = ({ productData, active, setActive, selected, setSelected }) => {

  

    return (
        <div className={s.product_img} >
            
            <Carousel active={active} setActive={setActive} selected={selected} setSelected={setSelected} img={productData.img} />
        </div>
    )
}

export default ProductCarousel;