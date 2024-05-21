import { useCallback, useEffect, useState } from 'react';
import DiscordBanner from '../common/DiscordBanner/DiscordBanner';
import ModalCarousel from './ModalCarousel/ModalCarousel';
import s from './Product.module.scss';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import ProductDescription from './ProductDescription';
import cartminus from './../../assets/icons/cartminus.svg';
import cart from './../../assets/icons/cart.svg';
import ButtonSecondary from '../common/ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../common/ButtonPrimary/ButtonPrimary';
import ButtonRemoveFromCart from '../common/ButtonRemoveFromCart/ButtonRemoveFromCart';

const ProductContainer = ({ productData }) => {

    const [inCart, setInCart] = useState();
    useEffect(() => {
        window.scrollTo(0, 0); // Скроллим страницу на самый верх
    }, []);

    const handleClick = useCallback(() => {
        setInCart(prevInCart => !prevInCart);
    }, [setInCart]);

    const [active, setActive] = useState(false);

    const [selected, setSelected] = useState(0);

    return (
        <div className={s.container} >
            <ProductCarousel setSelected={setSelected} selected={selected} active={active} setActive={setActive} productData={productData} />
            <div className={s.descriptionbanner}>
                <ProductDescription productData={productData} />
                <DiscordBanner />
                <div className={s.button} onClick={handleClick}>
                    {inCart ? <ButtonRemoveFromCart  text={"Удалить из корзины"} /> : <ButtonPrimary icon={cart} text={'Добавить в корзину'} />}
                </div>
            </div>
            <ModalCarousel setSelected={setSelected} selected={selected} img={productData.img} active={active} setActive={setActive} />

        </div>
    )
}

export default ProductContainer;