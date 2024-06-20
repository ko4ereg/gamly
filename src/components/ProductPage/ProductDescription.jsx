import { useState } from 'react';
import { formatValue } from '../../utils/formatValue';
import s from './Product.module.scss';
const ProductDescription = ({ productData }) => {


    const [inCart, setInCart] = useState();

    const handleClick = () => {
        setInCart(!inCart);
    }

    const newPrice = productData.discount ? productData.price * (1 - productData.discount / 100) : productData.price;
    const oldPrice = formatValue((productData.price).toString()) + ' ₽';
    const actualPrice = formatValue(newPrice.toString()) + ' ₽';

    if (!productData) {
        return null;
    }


    return (
        <section className={s.descriptionContainer}>
            <div className={s.description}>
                <div className={s.heading} >
                    <h1>{productData.title}</h1>
                    <div className={s.price}>
                        {productData.discount ? <span>{actualPrice}</span> : null} {productData.discount ? (<span className={s.oldprice}>{oldPrice}</span>) : (<span>{actualPrice}</span>)}
                    </div>
                </div>
                <div className={s.text}><p>{productData.description}</p></div>
            </div>

            <div className={s.sections}>
                <div className={s.section}>
                    <h2>Процесс получения</h2>
                    <ol>
                        <li>При получении вы должны зайти в свой Steam аккаунт с браузера</li>
                        <li>Добавить в друзья нашего бота, вы получите инвайт от него</li>
                    </ol>
                </div>


                <div className={s.section}>
                    <h2>Характеристики</h2>
                    <div className={s.features}>
                        {productData.wires !== undefined
                            ? <div className={s.featuresItem}>
                                <h3>Подключение</h3>
                                <span>{productData.wires && productData.wires === 'wires' ? 'Проводное' : 'Беспроводное'}</span>
                            </div>
                            : null}
                        {productData.connectToPhone !== undefined ? <div className={s.featuresItem}>
                            <h3>Можно подключить к телефону</h3>
                            <span>{productData.connectToPhone && productData.connectToPhone === true ? 'Да' : 'Нет'}</span>
                        </div> : null}
                        {productData.micro !== undefined ? <div className={s.featuresItem}>
                            <h3>Есть микрофон</h3>
                            <span>{productData.micro && productData.micro === true ? 'Да' : 'Нет'}</span>
                        </div> : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDescription;