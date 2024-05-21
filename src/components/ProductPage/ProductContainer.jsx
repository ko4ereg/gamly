import { useEffect, useState } from 'react';
import DiscordBanner from '../common/DiscordBanner/DiscordBanner';
import ModalCarousel from './ModalCarousel/ModalCarousel';
import s from './Product.module.scss';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import ProductDescription from './ProductDescription';

const ProductContainer = ({ productData }) => {


    useEffect(() => {
        window.scrollTo(0, 0); // Скроллим страницу на самый верх
      }, []);
    

    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(0);
    return (
        <div className={s.container} >
            <ProductCarousel setSelected={setSelected} selected={selected} active={active} setActive={setActive} productData={productData} />

            <ProductDescription productData={productData} />
            <DiscordBanner />
            <ModalCarousel setSelected={setSelected} selected={selected} img={productData.img} active={active} setActive={setActive} />

        </div>
    )
}

export default ProductContainer;