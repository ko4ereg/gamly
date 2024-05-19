import s from './ShopPage.module.scss';
 
import ProductCard from './ProductCard/ProductCard';
import Pagination from './Pagination';
import { useMemo } from 'react';

const Products = (props) => {


 

  let itemElement = useMemo(() =>
    props.prods.map((product, index) => <ProductCard product={product}
  key={index} />), [props.prods]
  );


  return (
    <div className={s.products_container}>
      <div className={s.products}>
        {itemElement}
      </div>
      <Pagination prodsAmount={props.prodsAmount} />
    </div>


  )
}

export default Products;

 