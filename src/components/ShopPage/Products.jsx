import s from './ShopPage.module.scss';
 
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { useMemo } from 'react';

const Products = ({prods, prodsAmount}) => {

 
console.log(prods);

  let itemElement = useMemo(() =>
    prods.map((product, index) => <ProductCard product={product}
  key={index} />), [prods]
  );


  return (
    <div className={s.products_container}>
      <div className={s.products}>
        {itemElement}
      </div>
      <Pagination prodsAmount={prodsAmount} />
    </div>


  )
}

export default Products;

 