import s from './Categories.module.scss';
import categoryPic1 from './../../assets/shop/category1.png';
import categoryPic2 from './../../assets/shop/category2.png';
import categoryPic3 from './../../assets/shop/category3.png';
import categoryPic4 from './../../assets/shop/category4.png';
import { useState } from 'react';
import { getNoun } from '../../utils/getNoun';
import { initialState } from '../../store/productsSlice';

const Categories = (props) => {

   const [selectedItem, setSelectedItem] = useState(1);

   const handleItemClick = (index) => {
      setSelectedItem(index);
   }

   const prods = initialState.products;

   const categories = [
      {
         title: 'Игровая периферия',
         prods: prods.filter(prod => prod.category === 'accessories'),
         pic: categoryPic1
      },
      {
         title: 'Дискорд и оформление',
         prods: prods.filter(prod => prod.category === 'discord'),
         pic: categoryPic2
      },
      {
         title: 'Цифровые подарки и игры',
         prods: prods.filter(prod => prod.category === 'gift'),
         pic: categoryPic3
      },
      {
         title: 'Компьютеры и комплектующие',
         prods: prods.filter(prod => prod.category === 'detail'),
         pic: categoryPic4
      }
   ];



   return (
      <div className={s.categories}>


         {categories.map((category, index) => (
            <div key={index} className={`${s.item} ${selectedItem === index + 1 ? s.selected : ''}`}
               onClick={() => handleItemClick(index + 1)} >
               <h2>{category.title}</h2>
               <span>{category.prods.length + ' ' + getNoun(category.prods, 'товар', 'товара', 'товаров')}</span>
               <img src={category.pic} alt="" />
               <div className={s.backhover} > </div>
            </div>
         ))}
      </div>
   )
}

export default Categories;