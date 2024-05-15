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


const Catalog = (props) => {
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



  const prods = [
    {
      title: 'Игровые наушники Logitech PRO X1',
      img: [pic1, pic2, pic3, pic4, pic2, pic3, pic4],
      price: '12 987 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X2',
      img: [pic1, pic2, pic3, pic4],
      price: '31 882 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X3',
      img: [pic1, pic2, pic3, pic4],
      price: '4 409 ₽',
      newPrice: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X4',
      img: [pic1, pic2, pic3, pic4],
      price: '3 809 ₽',
      inShip: true,
    },
    {
      title: 'Игровые наушники Logitech PRO X5',
      img: [pic1],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X6',
      img: [pic1, pic2, pic3, pic4],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X7',
      img: [pic3],
      price: '4 409 ₽',
      newPrice: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X8',
      img: [pic1, pic2, pic3, pic4],
      price: '3 809 ₽',
      inShip: true,
    },
    {
      title: 'Игровые наушники Logitech PRO X9',
      img: [pic1],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X10',
      img: [pic2],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X11',
      img: [pic1, pic2, pic3, pic4],
      price: '4 409 ₽',
      newPrice: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X12',
      img: [pic4],
      price: '3 809 ₽',
      inShip: true,
    },
    {
      title: 'Игровые наушники Logitech PRO X1',
      img: [pic1, pic2, pic3, pic4, pic2, pic3, pic4],
      price: '12 987 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X2',
      img: [pic1, pic2, pic3, pic4],
      price: '31 882 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X3',
      img: [pic1, pic2, pic3, pic4],
      price: '4 409 ₽',
      newPrice: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X4',
      img: [pic1, pic2, pic3, pic4],
      price: '3 809 ₽',
      inShip: true,
    },
    {
      title: 'Игровые наушники Logitech PRO X5',
      img: [pic1],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X6',
      img: [pic1, pic2, pic3, pic4],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X7',
      img: [pic3],
      price: '4 409 ₽',
      newPrice: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X8',
      img: [pic1, pic2, pic3, pic4],
      price: '3 809 ₽',
      inShip: true,
    },
    {
      title: 'Игровые наушники Logitech PRO X9',
      img: [pic1],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X10',
      img: [pic2],
      price: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X11',
      img: [pic1, pic2, pic3, pic4],
      price: '4 409 ₽',
      newPrice: '3 809 ₽'
    },
    {
      title: 'Игровые наушники Logitech PRO X12',
      img: [pic4],
      price: '3 809 ₽',
      inShip: true,
    },
  ]


  return (
    <div className={s.catalog}>
      <h1>Игровая периферия</h1>

      <div className={s.filters_panel}>
        <TypesSlider />

        <div className={s.filters_sorts}>
          <div className={s.sorts} ref={sortsRef}>
            <div className={s.sort}><span onClick={() => handleClick()}>Сортировка:</span></div>
            <div className={s.sort} onClick={() => handleClick()}>{currentSort}  {sortsOpen ? <img onClick={() => handleClick()} style={{ transform: 'rotateX(180deg)  translateY(-3px)', transition: '0.3s ', height: '19px', transformOrigin: 'center ' }} src={chevrondown} alt="" /> : <img src={chevrondown} style={{ transition: '0.3s ', height: '19px', transformOrigin: 'center  ' }} alt="" />}</div>

            {sortsOpen && <SortsBy currentSort={currentSort} setSortsOpen={setSortsOpen} setSort={setSort} />}
          </div>
          <div className={s.button} onClick={handleSetFilterActive}><img src={burger} alt="" />Фильтры</div>
        </div>
      </div>
      {prods.length > 0 ? <Products prodsAmount={prods.length} /> : <NotFound />}

      <FilterPopup prodsAmount={prods.length} filterActive={filterActive} setFilterActive={setFilterActive} />
    </div>
  )
}

export default Catalog;