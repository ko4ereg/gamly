import { useState } from 'react';
import DiscordBanner from '../common/DiscordBanner/DiscordBanner';
import ModalCarousel from './ModalCarousel/ModalCarousel';
import s from './Product.module.scss';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import ProductDescription from './ProductDescription';

const ProductContainer = ({ productData }) => {

    const [active, setActive] = useState(false);
   
    return (
        <div className={s.container} >
            <ProductCarousel active={active} setActive={setActive} productData={productData} />

            <ProductDescription productData={productData} />
            <DiscordBanner />
            <ModalCarousel img={productData.img} active={active} setActive={setActive}/>

        </div>
    )
}

export default ProductContainer;