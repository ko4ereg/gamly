import s from './ShopPage.module.scss';
 
const Pagination = (props) => {

  
  return (
    <div className={s.pagination}>
      <div className={s.page}>1</div>
      <div className={s.page}>2</div>
      <div className={s.page}>3</div>
    </div>
  )
}

export default Pagination;