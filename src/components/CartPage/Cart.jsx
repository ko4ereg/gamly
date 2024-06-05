import s from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import Delivery from './Delivery/Delivery';
import Total from './Total';

const Cart = ({ prods, deleteItem, addItem, reduceItem }) => {

    const uniqueIds = [];

    return (
        <div className={s.container}>
            <div className={s.heading}>Корзина</div>
            {prods.length > 0
                ? (
                    prods.map(prod => {
                        if (!uniqueIds.includes(prod.id)) {
                            uniqueIds.push(prod.id);
                            return <CartItem addItem={addItem} prods={prods} deleteItem={deleteItem} reduceItem={reduceItem} prod={prod} />
                        }
                        return null;
                    })
                )
                : <div className={s.heading}>Корзина пуста</div>}

            <Delivery />
        </div>
    )
}

export default Cart;