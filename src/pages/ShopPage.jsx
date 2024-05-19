import { useSelector } from 'react-redux';
import Catalog from '../components/ShopPage/Catalog';
import Categories from '../components/ShopPage/Categories';
import Search from '../components/ShopPage/Search';
import g from './../Globalstyles.module.css';
import s from './ShopPage.module.css';

 

const ShopPage = (props) => {

  const prods = useSelector(state => state.products.products);
  
  
    return (
        <div className={g.container + ' ' + s.container}>
           <Search/>
           <Categories prods={prods}/>
           <Catalog prods={prods}/>
        </div>)
}

export default ShopPage;