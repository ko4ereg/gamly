import s from './ShopPage.module.scss';
 import pic1 from './../../assets/shop/mock/1.png';
 
 import pic2 from './../../assets/shop/mock/2.png';
 
 import pic3 from './../../assets/shop/mock/3.png';
 import pic4 from './../../assets/shop/mock/3.png';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const Products = (props) => {
 

    const prods = [
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic1,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic2,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic3,
           price: '4 409 ₽',
           newPrice: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic4,
           price: '3 809 ₽',
           inShip: true,
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic1,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic2,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic3,
           price: '4 409 ₽',
           newPrice: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic4,
           price: '3 809 ₽',
           inShip: true,
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic1,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic2,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic3,
           price: '4 409 ₽',
           newPrice: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X',
           img: pic4,
           price: '3 809 ₽',
           inShip: true,
        },
    ]

  return (
   <div className={s.products_container}>
    <div className={s.products}>
     {prods.map(product => <ProductCard product={product}
       key={product.title} />
      )}
      </div>
  <Pagination/>
    </div>
   
    
  )
}

export default Products;