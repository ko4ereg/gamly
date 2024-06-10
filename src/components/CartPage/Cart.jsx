import s from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import Delivery from './Delivery/Delivery';
 

const Cart = ({ prods, deleteItem, addItem, reduceItem }) => {

    const uniqueIds = [];

    return (
        <div className={s.container}>
            <div className={s.heading}>Корзина</div>
            {
                prods.map(prod => {
                    if (!uniqueIds.includes(prod.id)) {
                        uniqueIds.push(prod.id);
                        return <CartItem addItem={addItem} prods={prods} deleteItem={deleteItem} reduceItem={reduceItem} prod={prod} />
                    }
                    return null;
                })
            }

            <Delivery />
        </div>
    )
}

export default Cart;