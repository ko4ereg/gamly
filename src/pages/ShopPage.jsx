import { useState } from 'react';
import Catalog from '../components/ShopPage/Catalog';
import Categories from '../components/ShopPage/Categories';
import Search from '../components/ShopPage/Search';
import { prods } from '../components/mock/products';
import g from './../Globalstyles.module.css';
import s from './ShopPage.module.css';
const ShopPage = (props) => {
  
    const [actualProducts, setActualProducts] = useState(prods);
   
    // if (actualProducts.length === 0) {
    //     setActualProducts(prods);
    // }

    return (
        <div className={g.container + ' ' + s.container}>
            <Search setActualProducts={setActualProducts} actualProducts={actualProducts} />
            <Categories setActualProducts={setActualProducts} actualProducts={actualProducts} />
            <Catalog setActualProducts={setActualProducts} actualProducts={actualProducts} />
        </div>)
}

export default ShopPage;