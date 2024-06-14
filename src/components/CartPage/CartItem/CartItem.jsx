import { useEffect, useState } from 'react';
import CloseButton from '../../common/Buttons/CloseButton/CloseButton';
import s from './CartItem.module.scss';
import ButtonSecondary from '../../common/Buttons/ButtonSecondary/ButtonSecondary';
import { formatValue } from '../../../utils/formatValue';
import { NavLink } from 'react-router-dom';

const CartItem = ({ prod, deleteItem, prods, addItem, reduceItem }) => {

    const [totalQuantity, setTotalQuantity] = useState(1);

    useEffect(() => {
        const quantityById = prods.reduce((quantity, p) => {
            quantity[p.id] = (quantity[p.id] || 0) + 1;
            return quantity;
        }, {});

        const currentQuantity = quantityById[prod.id] || 0;
        setTotalQuantity(currentQuantity);
    }, [prods, prod.id]);

    const handleIncreaseAmount = () => {
        addItem(prod);
    }

    const handleDecreaseAmount = () => {

        reduceItem(prod);

    }


    return (
        <div className={s.container}>
            {window.innerWidth > 767
                ? <div className={s.cartItemImg} style={{ backgroundImage: `url(${prod.img[0]})` }}> </div>
                : <div className={s.cartGallery}>
                    {prod.img.map(img => {
                        return <div style={{ backgroundImage: `url(${img})` }} className={s.galleryCard}></div>
                    })}
                </div>
            }


            <div className={s.info}>
                <div className={s.top}>
                    <NavLink to={`/shop/${prod.id}`}> <div className={s.title}>{prod.title}</div></NavLink>
                    <div className={s.price}>{formatValue(prod.price)} ₽</div>
                </div>
                <div className={s.controls}>
                    <div className={s.count}>
                        <CloseButton disabled={totalQuantity === 1} onClick={() => handleDecreaseAmount()} icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.05078 7.99872L7.99359 7.99872L12.9364 7.99872" stroke="#B2ACBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>} />
                        {totalQuantity}
                        <CloseButton onClick={() => handleIncreaseAmount()} icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99357 12.9415L7.99359 7.99872M7.99359 7.99872L7.99357 3.05593M7.99359 7.99872L3.05078 7.99872M7.99359 7.99872L12.9364 7.99872" stroke="#B2ACBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>} />
                    </div>
                    <div className={s.button}>
                        <ButtonSecondary medium={true} onClick={() => deleteItem(prod)} text={'Убрать из корзины'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;