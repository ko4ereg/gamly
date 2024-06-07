import s from './ShopPage.module.scss';
import burger from './../../assets/icons/burgermenu.svg';
import chevrondown from './../../assets/icons/chevrondown.svg';
import SortsBy from './SortsBy';
import { useEffect, useRef, useState } from 'react';
import Products from './Products';
import TypesSlider from './TypesSlider';
import NotFound from './NotFound';
import FilterPopup from './FilterPopup/FilterPopup';
import PopupWithoutImage from '../common/Popup/PopupWithoutImage';
import PopupFilters from '../common/Popup/PopupContent/PopupFilters/PopupFilters';
import { getNoun } from '../../utils/getNoun';
import PopupFiltersLayout from '../common/Popup/PopupLayouts/PopupFilters/PopupFiltersLayout';




const Catalog = ({ prods, ...props }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [sortsOpen, setSortsOpen] = useState(false);
  const sortsRef = useRef(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
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




  const noun = getNoun(prods.length, 'товар', 'товара', 'товаров');
  const amount = prods.length + ' ' + noun;



  return (
    <div className={s.catalog}>
      <h1>Игровая периферия</h1>

      <div className={s.filters_panel}>
        <TypesSlider setSelectedTypes={setSelectedTypes} selectedTypes={selectedTypes} />

        <div className={s.filters_sorts}>
          <div className={s.sorts} ref={sortsRef}>
            <div className={s.sort}><span onClick={() => handleClick()}>Сортировка:</span></div>
            <div className={s.sort} onClick={() => handleClick()}>{currentSort}  {sortsOpen ? <img onClick={() => handleClick()} style={{ transform: 'rotateX(180deg)  translateY(-3px)', height: '19px', transformOrigin: 'center ' }} src={chevrondown} alt="" /> : <img src={chevrondown} style={{ height: '19px', transformOrigin: 'center  ' }} alt="" />}</div>

            {sortsOpen && <SortsBy currentSort={currentSort} setSortsOpen={setSortsOpen} setSort={setSort} />}
          </div>
          <div className={s.button} onClick={handleSetFilterActive}><img src={burger} alt="" />Фильтры</div>
        </div>
      </div>
      {prods.length > 0 ? <Products prods={prods} prodsAmount={prods.length} /> : <NotFound setSelectedTypes={setSelectedTypes} />}
    
      <PopupFiltersLayout popupActive={filterActive} note={amount} setPopupActive={setFilterActive} />
      {/* 
      <FilterPopup prodsAmount={prods.length} filterActive={filterActive} setFilterActive={setFilterActive} /> */}
    </div>
  )
}

export default Catalog;