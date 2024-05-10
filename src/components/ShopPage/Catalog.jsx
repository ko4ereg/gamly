import s from './ShopPage.module.scss';
import burger from './../../assets/icons/burgermenu.svg';
import chevrondown from './../../assets/icons/chevrondown.svg';
import SortsBy from './SortsBy';
import { useEffect, useRef, useState } from 'react';
import Products from './Products';
import TypesSlider from './TypesSlider';



const Catalog = (props) => {

  const [sortsOpen, setSortsOpen] = useState(false);
  const sortsRef = useRef(null);

  const [currentSort, setSort] = useState('сначала популярные');

  const handleClick = (e) => {
    setSortsOpen(!sortsOpen);
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
            <div className={s.sort} onClick={() => handleClick()}>{currentSort}  {sortsOpen ? <img onClick={() => handleClick()} style={{ transform: 'rotateX(180deg)  translateY(-3px)',  transition: '0.3s ', height: '19px', transformOrigin: 'center '  }} src={chevrondown} alt="" /> : <img src={chevrondown} style={{  transition: '0.3s ', height: '19px', transformOrigin: 'center  ' }} alt="" />}</div>

            {sortsOpen && <SortsBy currentSort={currentSort} setSortsOpen={setSortsOpen} setSort={setSort} />}
          </div>
          <div className={s.button}><img src={burger} alt="" />Фильтры</div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Catalog;