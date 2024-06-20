import s from './NotFound.module.scss';
import { useDispatch } from 'react-redux';
import { getTypeItems } from '../../store/productsSlice';
import ButtonSecondary from '../common/Buttons/ButtonSecondary/ButtonSecondary';

const NotFound = (props) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getTypeItems());
    props.setSelectedTypes([]);
  }

  return (
    <div className={s.notfound}>
      <div className={s.container}>
        <span>Ничего не найдено</span>
        <div className={s.notfound_button}> <ButtonSecondary medium={true} onClick={handleClick} text={'Сбросить фильтры и теги'} /></div>
      </div>
    </div>
  )
}

export default NotFound;