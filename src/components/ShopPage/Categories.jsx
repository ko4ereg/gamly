import s from './ShopPage.module.scss';
import categoryPic1 from './../../assets/shop/category1.png';
import categoryPic2 from './../../assets/shop/category2.png';
import categoryPic3 from './../../assets/shop/category3.png';
import categoryPic4 from './../../assets/shop/category4.png';
import { useState } from 'react';
import { getNoun } from '../../utils/getNoun';

const Categories = (props) => {

   const [selectedItem, setSelectedItem] = useState(1);

   const handleItemClick = (index) => {
      setSelectedItem(index);
   }


   const categories = [
      {
         title: 'Игровая периферия',
         prods: props.prods.filter(prod => prod.category === 'accessories'),
         pic: categoryPic1
      },
      {
         title: 'Дискорд и оформление',
         prods: props.prods.filter(prod => prod.category === 'discord'),
         pic: categoryPic2
      },
      {
         title: 'Цифровые подарки и игры',
         prods: props.prods.filter(prod => prod.category === 'gift'),
         pic: categoryPic3
      },
      {
         title: 'Компьютеры и комплектующие',
         prods: props.prods.filter(prod => prod.category === 'detail'),
         pic: categoryPic4
      }
   ];


   // const accessoriesProds = props.prods.filter(prod => prod.category === 'accessories');
   // const discordProds = props.prods.filter(prod => prod.category === 'discord');
   // const giftProds = props.prods.filter(prod => prod.category === 'gift');
   // const detailProds = props.prods.filter(prod => prod.category === 'detail');

   // const noun = getNoun(accessoriesProds, 'товар', 'товара', 'товаров');
   // const amountAccessories = accessoriesProds.length + ' ' + noun;

   return (
      <div className={s.categories}>

         {/* <div className={`${s.item} ${selectedItem === 1 ? s.selected : ''}`} onClick={() => handleItemClick(1)} >
            <h2>Игровая периферия</h2>
            <span>{amountAccessories}</span>
            <img src={categoryPic1} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={`${s.item} ${selectedItem === 2 ? s.selected : ''}`} onClick={() => handleItemClick(2)} >
            <h2>Дискорд и оформление</h2>
            <span>{discordProds.length + ' ' + getNoun(discordProds, 'товар', 'товара', 'товаров')}</span>
            <img src={categoryPic2} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={`${s.item} ${selectedItem === 3 ? s.selected : ''}`} onClick={() => handleItemClick(3)} >
            <h2>Цифровые подарки и игры</h2>
            <span>{giftProds.length + ' ' + getNoun(giftProds, 'товар', 'товара', 'товаров')}</span>
            <img src={categoryPic3} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={`${s.item} ${selectedItem === 4 ? s.selected : ''}`} onClick={() => handleItemClick(4)} >
            <h2>Компьютеры и комплектующие</h2>
            <span>{detailProds.length + ' ' + getNoun(detailProds, 'товар', 'товара', 'товаров')}</span>
            <img src={categoryPic4} alt="" />
            <div className={s.backhover} />
         </div> */}
         {categories.map((category, index) => (
            <div key={index} className={`${s.item} ${selectedItem === index + 1 ? s.selected : ''}`}
               onClick={() => handleItemClick(index + 1)} >
               <h2>{category.title}</h2>
               <span>{category.prods.length + ' ' + getNoun(category.prods, 'товар', 'товара', 'товаров')}</span>
               <img src={category.pic} alt="" />
               <div className={s.backhover} />
            </div>
         ))}
      </div>
   )
}

export default Categories;