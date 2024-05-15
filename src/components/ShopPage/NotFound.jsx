import { useState } from 'react';
import s from './ShopPage.module.scss';
import { prods } from '../mock/products';

const NotFound = (props) => {

   

  return (
    <div className={s.notfound}>
     <span>Ничего не найдено</span>
     <div onClick={()=> props.setActualProducts(prods)} className={s.notfound_button}>Сбросить фильтры и теги</div>
    </div>
  )
}

export default NotFound;