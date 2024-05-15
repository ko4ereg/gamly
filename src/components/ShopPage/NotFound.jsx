 
import s from './ShopPage.module.scss';
 

const NotFound = (props) => {

   

  return (
    <div className={s.notfound}>
     <span>Ничего не найдено</span>
     <div  className={s.notfound_button}>Сбросить фильтры и теги</div>
    </div>
  )
}

export default NotFound;