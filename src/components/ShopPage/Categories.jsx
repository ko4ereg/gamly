import s from './ShopPage.module.scss';
import categoryPic1 from './../../assets/shop/category1.png';
import categoryPic2 from './../../assets/shop/category2.png';
import categoryPic3 from './../../assets/shop/category3.png';
import categoryPic4 from './../../assets/shop/category4.png';

const Categories = (props) => {

   return (
      <div className={s.categories}>

         <div className={s.item} >
            <h2>Игровая периферия</h2>
            <span>188 товаров</span>
            <img src={categoryPic1} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={s.item} >
            <h2>Скины</h2>
            <span>188 товаров</span>
            <img src={categoryPic2} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={s.item} >
            <h2>Цифровые подарки</h2>
            <span>188 товаров</span>
            <img src={categoryPic3} alt="" />
            <div className={s.backhover} />
         </div>
         <div className={s.item} >
            <h2>Компьютерные комплектующие</h2>
            <span>188 товаров</span>
            <img src={categoryPic4} alt="" />
            <div className={s.backhover} />
         </div>
      </div>
   )
}

export default Categories;