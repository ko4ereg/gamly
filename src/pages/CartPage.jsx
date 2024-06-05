import { useEffect, useState } from 'react';
import Cart from '../components/CartPage/Cart';
import Total from '../components/CartPage/Total';
import g from './../Globalstyles.module.css';
import s from './CartPage.module.css';
import { useSelector } from 'react-redux';



const CartPage = (props) => {

    const prodsCatalog = useSelector(state => state.products.products);

    const [prods, setProds] = useState([{
        title: 'Наушники PRO X 2 LIGHTSPEED',
        creator: 'Logitech',
        img: ['https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-2-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-3-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-4-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-5-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-6-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
        ],
        price: '1890',
        type: 'headphones',
        wires: 'wires',
        connectToPhone: false,
        micro: true,
        discount: 30,
        buys: 100,
        category: 'accessories',
        id: 1,
        description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
    }, {
        title: 'Наушники PRO X 2 LIGHTSPEED',
        creator: 'Logitech',
        img: ['https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-2-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-3-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-4-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-5-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
            'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-6-pro-x-2-lightspeed-gaming-headset-black.png?v=1',
        ],
        price: '1890',
        type: 'headphones',
        wires: 'wires',
        connectToPhone: false,
        micro: true,
        discount: 30,
        buys: 100,
        category: 'accessories',
        id: 1,
        description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
    },])

    const [totalPrice, setTotalPrice] = useState('');

    useEffect(() => {
        const total = prods.reduce((acc, prod) => acc + parseInt(prod.price), 0);
        setTotalPrice(total.toString());
    }, [prods]);


    const addItem = (item) => {
        const prod = prodsCatalog.find(prod => prod.id === item.id);
        setProds([...prods, prod]);
    }

    const reduceItem = (item) => {
        const index = prods.findIndex(prod => prod.id === item.id);
        if (index !== -1) {
            setProds([
                ...prods.slice(0, index),
                ...prods.slice(index + 1)
            ]);
        }
    }

    const deleteItem = (item) => {
        setProds(prods.filter(prod => prod.id !== item.id))
    }

    return (
        <div className={g.container + ' ' + s.container}>
            <Cart addItem={addItem} reduceItem={reduceItem} deleteItem={deleteItem} prods={prods} />
            <Total price={totalPrice} />
        </div>)
}

export default CartPage;