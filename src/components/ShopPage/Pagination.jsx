import { useState } from 'react';
import s from './Pagination.module.scss';

const Pagination = ({ portionSize = 10, prodsAmount = 200,  pageSize = 12, }) => {

  let pagesCount = Math.ceil(prodsAmount / pageSize);

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
      if (p === 1 || p === pagesCount || (p >= currentPage - 1 && p <= (window.innerWidth < 1024 ? currentPage + 1 : currentPage + 2))) {
        return (
          <div
            key={p}
            className={currentPage === p ? `${s.page}  ${s.activePage}` : s.page}
            onClick={() => {
              onPageChange(p)
            }}>{p} </div>
        );
      } else if (p === currentPage - 2 || (window.innerWidth < 1024 ? p === currentPage + 2 : p === currentPage + 3)) {
        return <div className={s.pageEmpty} key={p}>... </div>;
      } else {
        return null;
      }
    })}

  </div>

}

export default Pagination;