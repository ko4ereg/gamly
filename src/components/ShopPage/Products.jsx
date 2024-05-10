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
            title: 'Игровые наушники Logitech PRO X1',
           img: pic1,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X2',
           img: pic2,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X3',
           img: pic3,
           price: '4 409 ₽',
           newPrice: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X4',
           img: pic4,
           price: '3 809 ₽',
           inShip: true,
        },
        {
            title: 'Игровые наушники Logitech PRO X5',
           img: pic1,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X6',
           img: pic2,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X7',
           img: pic3,
           price: '4 409 ₽',
           newPrice: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X8',
           img: pic4,
           price: '3 809 ₽',
           inShip: true,
        },
        {
            title: 'Игровые наушники Logitech PRO X9',
           img: pic1,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X10',
           img: pic2,
           price: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X11',
           img: pic3,
           price: '4 409 ₽',
           newPrice: '3 809 ₽'
        },
        {
            title: 'Игровые наушники Logitech PRO X12',
           img: pic4,
           price: '3 809 ₽',
           inShip: true,
        },
    ]

  return (
   <div className={s.products_container}>
    <div className={s.products}>
     {prods.map((product, index) => <ProductCard product={product}
       key={index} />
      )}
      </div>
  <Pagination/>
    </div>
   
    
  )
}

export default Products;