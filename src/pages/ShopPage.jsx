import Catalog from '../components/ShopPage/Catalog';
import Categories from '../components/ShopPage/Categories';
import Search from '../components/ShopPage/Search';
import g from './../Globalstyles.module.css';
import s from './ShopPage.module.css';


import pic1 from './../assets/shop/mock/1.png';

import pic2 from './../assets/shop/mock/2.png';

import pic3 from './../assets/shop/mock/3.png';
import pic4 from './../assets/shop/mock/4.png';

const prods = [
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
    category: 'accessories'
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
    category: 'accessories'
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
    category: 'accessories'
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
    category: 'accessories'
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
    category: 'accessories'
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
    category: 'accessories'
  },
  {
    title: 'Клавиатура ASUS TUF Gaming K3',
    creator: 'ASUS',
    img: [pic1, pic2, pic3],
    price: '5890',
    type: 'keyboard',
    wires: 'wires',
    connectToPhone: false,
    discount: 20,
    buys: 20,
    category: 'accessories'
  },

  {
    title: 'Мышь Razor',
    creator: 'Razer',
    img: [pic1, pic2, pic3,],
    price: '1890',
    type: 'mouse',
    wires: 'wires',
    connectToPhone: false,
    discount: 30,
    buys: 100,
    category: 'accessories'
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
    category: 'accessories'
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
    category: 'accessories'
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
    category: 'accessories'
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
    category: 'accessories'
  },


]

const ShopPage = (props) => {


    return (
        <div className={g.container + ' ' + s.container}>
           <Search/>
           <Categories prods={prods}/>
           <Catalog prods={prods}/>
        </div>)
}

export default ShopPage;