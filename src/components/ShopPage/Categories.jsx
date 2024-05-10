import s from './ShopPage.module.scss';
import categoryPic1 from './../../assets/shop/category1.png';
import categoryPic2 from './../../assets/shop/category2.png';
import categoryPic3 from './../../assets/shop/category3.png';
import categoryPic4 from './../../assets/shop/category4.png';
import { useState } from 'react';

const Categories = (props) => {

   const [selectedItem, setSelectedItem] = useState(null);

   const handleItemClick = (index) => {
      setSelectedItem(index);
   }


   return (
      <div className={s.categories}>

         <div className={`${s.item} ${selectedItem === 1 ? s.selected : ''}`} onClick={() => handleItemClick(1)} >
            <h2>Игровая периферия</h2>
            <span>188 товаров</span>
            <img src={categoryPic1} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={`${s.item} ${selectedItem === 2 ? s.selected : ''}`} onClick={() => handleItemClick(2)} >
            <h2>Скины</h2>
            <span>188 товаров</span>
            <img src={categoryPic2} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={`${s.item} ${selectedItem === 3 ? s.selected : ''}`} onClick={() => handleItemClick(3)} >
            <h2>Цифровые подарки</h2>
            <span>188 товаров</span>
            <img src={categoryPic3} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={`${s.item} ${selectedItem === 4 ? s.selected : ''}`} onClick={() => handleItemClick(4)} >
            <h2>Компьютерные комплектующие</h2>
            <span>188 товаров</span>
            <img src={categoryPic4} alt="" />
            <div className={s.backhover} />
         </div>
      </div>
   )
}

export default Categories;