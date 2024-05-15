import s from './ShopPage.module.scss';
import burger from './../../assets/icons/burgermenu.svg';
import chevrondown from './../../assets/icons/chevrondown.svg';
import SortsBy from './SortsBy';
import { useEffect, useRef, useState } from 'react';
import Products from './Products';
import TypesSlider from './TypesSlider';
import NotFound from './NotFound';
import FilterPopup from './FilterPopup/FilterPopup';



import pic1 from './../../assets/shop/mock/1.png';

import pic2 from './../../assets/shop/mock/2.png';

import pic3 from './../../assets/shop/mock/3.png';
import pic4 from './../../assets/shop/mock/4.png';
 
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
    title: 'Наушники Razer G200S Black Red',
    creator: 'Razer',
    img: [pic1, pic2, pic3,],
    price: '1890',
    type: 'headphones',
    wires: 'wires',
    connectToPhone: false,
    discount: 30,
    buys: 100,
    category: 'accessories'
  },

]

const Catalog = ({ ...props }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [sortsOpen, setSortsOpen] = useState(false);
  const sortsRef = useRef(null);

  const [currentSort, setSort] = useState('сначала популярные');

  const handleClick = (e) => {
    setSortsOpen(!sortsOpen);
  }

  const handleSetFilterActive = () => {
    setFilterActive(!filterActive);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortsRef.current && !sortsRef.current.contains(event.target)) {
        setSortsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);







  return (
    <div className={s.catalog}>
      <h1>Игровая периферия</h1>

      <div className={s.filters_panel}>
        <TypesSlider />

        <div className={s.filters_sorts}>
          <div className={s.sorts} ref={sortsRef}>
            <div className={s.sort}><span onClick={() => handleClick()}>Сортировка:</span></div>
            <div className={s.sort} onClick={() => handleClick()}>{currentSort}  {sortsOpen ? <img onClick={() => handleClick()} style={{ transform: 'rotateX(180deg)  translateY(-3px)', height: '19px', transformOrigin: 'center ' }} src={chevrondown} alt="" /> : <img src={chevrondown} style={{ height: '19px', transformOrigin: 'center  ' }} alt="" />}</div>

            {sortsOpen && <SortsBy currentSort={currentSort} setSortsOpen={setSortsOpen} setSort={setSort} />}
          </div>
          <div className={s.button} onClick={handleSetFilterActive}><img src={burger} alt="" />Фильтры</div>
        </div>
      </div>
      {prods.length > 0 ? <Products prods={prods} prodsAmount={prods.length} /> : <NotFound />}

      <FilterPopup prodsAmount={prods.length} filterActive={filterActive} setFilterActive={setFilterActive} />
    </div>
  )
}

export default Catalog;