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
                    {inCart ? <ButtonSecondary icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Cart Minus">
                            <path id="Vector" d="M2.75 5.5H20.1667L17.4167 14.6667H5.5L2.75 5.5ZM2.75 5.5L2.0625 3.20833" stroke="#B2ACBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_2" d="M9.16016 10.0833H12.8268" stroke="#B2ACBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_3" d="M10.084 17.875C10.084 18.6344 9.46835 19.25 8.70898 19.25C7.94959 19.25 7.33398 18.6344 7.33398 17.875" stroke="#B2ACBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_4" d="M15.584 17.875C15.584 18.6344 14.9684 19.25 14.209 19.25C13.4496 19.25 12.834 18.6344 12.834 17.875" stroke="#B2ACBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                    } text={"Удалить из корзины"} /> : <ButtonPrimary icon={<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Cart Plus">
                            <path id="Vector" d="M3.25 5.5H20.6667L17.9167 14.6667H6L3.25 5.5ZM3.25 5.5L2.5625 3.20833" stroke="#F9F8FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_2" d="M9.66016 10.0833H11.4935M11.4935 10.0833H13.3268M11.4935 10.0833V8.25M11.4935 10.0833V11.9167" stroke="#F9F8FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_3" d="M10.584 17.875C10.584 18.6344 9.96835 19.25 9.20898 19.25C8.44959 19.25 7.83398 18.6344 7.83398 17.875" stroke="#F9F8FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path id="Vector_4" d="M16.084 17.875C16.084 18.6344 15.4684 19.25 14.709 19.25C13.9496 19.25 13.334 18.6344 13.334 17.875" stroke="#F9F8FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                    } text={'Добавить в корзину'} />}
                </div>
            </div>
            <ModalCarousel setSelected={setSelected} selected={selected} img={productData.img} active={active} setActive={setActive} />

        </div>
    )
}

export default ProductContainer;