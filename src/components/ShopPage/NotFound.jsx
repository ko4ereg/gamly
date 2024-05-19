import { useState } from 'react';
import s from './NotFound.module.scss';
import { useDispatch } from 'react-redux';
import { getTypeItems } from '../../store/productsSlice';

const NotFound = (props) => {

  const dispatch = useDispatch();

const handleClick = () => {
  dispatch(getTypeItems());
  props.setSelectedTypes([]);
}

  return (
    <div className={s.notfound}>
     <span>Ничего не найдено</span>
     <div onClick={handleClick} className={s.notfound_button}>Сбросить фильтры и теги</div>
    </div>
  )
}

export default NotFound;