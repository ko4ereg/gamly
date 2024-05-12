import { useState } from 'react';
import s from './ShopPage.module.scss';

const Pagination = ({ portionSize = 10, totalItems = 200, pageSize = 12, }) => {

  let pagesCount = Math.ceil(totalItems / pageSize);

  const [portionNumber, setPortionNumber] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);


  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  let portionCount = Math.ceil(pagesCount / portionSize);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;



  const onPageChange = (p) => {
    setCurrentPage(p);
  }

  return <div className={s.pagination}>


    {pages.map((p) => {
      if (p === 1 || p === pagesCount || (p >= currentPage - 2 && p <= currentPage + 2)) {
        return (
          <div
            key={p}
            className={currentPage === p ? `${s.page}  ${s.activePage}` : s.page}
            onClick={() => {
              onPageChange(p)
            }}>{p} </div>
        );
      } else if (p === currentPage - 3 || p === currentPage + 3) {
        return <div className={s.pageEmpty} key={p}>... </div>;
      } else {
        return null;
      }
    })}

  </div>

}

export default Pagination;