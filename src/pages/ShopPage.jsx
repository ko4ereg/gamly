import Catalog from '../components/ShopPage/Catalog';
import Categories from '../components/ShopPage/Categories';
import Search from '../components/ShopPage/Search';
import g from './../Globalstyles.module.css';
import s from './ShopPage.module.css';
const ShopPage = (props) => {


    return (
        <div className={g.container + ' ' + s.container}>
           <Search/>
           <Categories/>
           <Catalog/>
        </div>)
}

export default ShopPage;