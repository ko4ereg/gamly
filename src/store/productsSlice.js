import { createSlice } from "@reduxjs/toolkit"
import pic1 from './../assets/shop/mock/1.png';

import pic2 from './../assets/shop/mock/2.png';

import pic3 from './../assets/shop/mock/3.png';
import pic4 from './../assets/shop/mock/4.png';
import pic5 from './../assets/shop/mock/mouse.png';

export const initialState = {
    products: [
        {
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
        },
        {
            title: 'Наушники Bloody G200S Black White',
            creator: 'A4Tech',
            img: [
                "https://resource.astrogaming.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/astro/en/products/a30/pdp-gallery-a30-white-01.png?v=1",
                "https://resource.astrogaming.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/astro/en/products/a30/pdp-gallery-a30-white-02.png?v=1",
                "https://resource.astrogaming.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/astro/en/products/a30/pdp-gallery-a30-white-03.png?v=1",
                "https://resource.astrogaming.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/astro/en/products/a30/pdp-gallery-a30-white-04.png?v=1",
                "https://resource.astrogaming.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/astro/en/products/a30/pdp-gallery-a30-white-05.png?v=1",

            ],
            price: '1290',
            type: 'headphones',
            wires: 'wireless',
            connectToPhone: true,
            discount: 0,
            buys: 10,
            micro: false,
            category: 'accessories',
            id: 2,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Наушники Bloody G200S Black Green',
            creator: 'Asus',
            img: [pic1, pic2, pic3, pic4, pic2,],
            price: '12890',
            type: 'headphones',
            wires: 'wires',
            connectToPhone: true,
            discount: 0,
            buys: 1,
            category: 'accessories',
            id: 3,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Наушники ZET',
            creator: 'ZET',
            img: [
                pic2, pic3, pic4,
            ],
            price: '3890',
            type: 'headphones',
            wires: 'wires',
            connectToPhone: false,
            discount: 30,
            buys: 100,
            micro: true,
            category: 'accessories',
            id: 4,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Клавиатура ASUS TUF Gaming K1',
            creator: 'ASUS',
            img: [
                pic1, pic2, pic4
            ],
            price: '5890',
            type: 'keyboard',
            wires: 'wires',
            connectToPhone: false,
            discount: 0,
            buys: 120,
            category: 'accessories',
            id: 5,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Клавиатура беспроводная ASUS TUF Gaming K2',
            creator: 'ASUS',
            img: [
                pic1

            ],
            price: '1990',
            type: 'keyboard',
            wires: 'wireless',
            connectToPhone: false,
            discount: 0,
            buys: 220,
            category: 'accessories',
            id: 6,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Клавиатура ASUS TUF Gaming K3',
            creator: 'ASUS',
            img: ["https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x60-wireless-keyboard/gallery/pro-x-60-keyboard-black-gallery-1-us.png?v=1",
                "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x60-wireless-keyboard/gallery/pro-x-60-keyboard-black-gallery-3-us.png?v=1",
                'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x60-wireless-keyboard/gallery/pro-x-60-keyboard-black-gallery-5-us.png?v=1'],
            price: '5890',
            type: 'keyboard',
            wires: 'wires',
            connectToPhone: false,
            discount: 20,
            buys: 20,
            category: 'accessories',
            id: 7,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },

        {
            title: 'Мышь Razor',
            creator: 'Razer',
            img: ['https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502x-plus/gallery/g502x-plus-gallery-1-black.png'],
            price: '1890',
            type: 'mouse',
            wires: 'wires',

            discount: 30,
            buys: 100,
            category: 'accessories',
            id: 8,
            description: 'Серия игровых мышек Razer DeathAdder пользуется большой популярностью среди обычных игроков и профессиональных геймеров уже более десяти лет. Эти устройства отличаются высокой прочностью и надежностью, благодаря чему они заработали превосходную репутацию. Последней новинкой в данной серии девайсов стала игровая мышь Razer DeathAdder Essential, которая вобрала в себя все самые лучшие качества от предыдущих моделей, а ее разработчики дополнили все это самыми современными инновациями.'
        },
        {
            title: 'Наушники Bloody G200S Black Red',
            creator: 'A4Tech',
            img: [pic1, pic2, pic3, pic4, pic2, pic3, pic4],
            price: '1890',
            type: 'headphones',
            wires: 'wires',
            connectToPhone: false,
            discount: 30,
            buys: 100,
            category: 'accessories',
            id: 9,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Наушники Bloody G200S Black White',
            creator: 'A4Tech',
            img: [
                pic2

            ],
            price: '1290',
            type: 'headphones',
            wires: 'wireless',
            connectToPhone: true,
            discount: 0,
            buys: 10,
            category: 'accessories',
            id: 10,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Наушники Bloody G200S Black Green',
            creator: 'Asus',
            img: [pic1, pic2, pic3, pic4, pic2,],
            price: '12890',
            type: 'headphones',
            wires: 'wires',
            connectToPhone: true,
            discount: 0,
            buys: 1,
            category: 'accessories',
            id: 11,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
        {
            title: 'Наушники ZET',
            creator: 'ZET',
            img: [
                pic2, pic3, pic4,
            ],
            price: '3890',
            type: 'headphones',
            wires: 'wires',
            connectToPhone: false,
            discount: 30,
            buys: 100,
            category: 'accessories',
            id: 12,
            description: 'Гарнитура от Logitech позволит тебе разобраться в звуках, не создавая мешанины. Отдалённые выстрелы, шаги противников и скрип дверей - твои уши уловят каждый нюанс, что поможет подготовиться к столкновению с неприятелем. Девайс позволяет включить режим объёмного звука, чтобы погрузиться в виртуальные миры и тщательно следить за врагами. Возможности Logitech G Pro X пригодятся как в онлайне, так и в синглплеерных играх. Гарнитура оборудована микрофоном с внушительной кастомизацией настроек. Технология Blue Voice позволит изменять голос в реальном времени, чтобы упростить общение с напарниками. Высокие частоты при необходимости можно смягчить, а слишком тихую речь сделать более громкой. Не менее важно, что наушники от Logitech комфортно сидят на голове на протяжении долгих часов. Оголовье с мягкой подкладкой и удобные амбушюры не будут тебе мешать даже во время продолжительных игровых сессий.'
        },
    ],
    selectedProduct: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getTypeItems: (state) => {
            state.products = initialState.products;
        },
        setTypeItems: (state, action) => {

            state.products = state.products.filter((item) => item.type === action.payload)
        },
        addTypeItems: (state, action) => {

            state.products = state.products.concat(initialState.products.filter((item) => item.type === action.payload))
        },
        deleteTypeItems: (state, action) => {
            state.products = state.products.filter((item) => item.type !== action.payload)
        },
        getProductData: (state, action) => {
            console.log(action);
            state.selectedProduct = state.products.find((item) => item.id === action.payload);
        }
    }
})


export const { getTypeItems, addTypeItems, deleteTypeItems, setTypeItems, getProductData } = productsSlice.actions;

export default productsSlice.reducer;