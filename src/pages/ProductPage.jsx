import { useParams } from 'react-router-dom';
import g from './../Globalstyles.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../store/productsSlice';
import ProductContainer from '../components/ProductPage/ProductContainer';

const ProductPage = () => {
    const dispatch = useDispatch();
    let { productId } = useParams();

    const productData = useSelector(state => state.products.selectedProduct);


    useEffect(() => {
       
        if (productId) {
            const numberId = parseInt(productId);
       
            dispatch(getProductData(numberId));
        }
    }, [productId]);




    if (!productData) {
        return null
    }
    return (
        <div className={g.container}>

            <ProductContainer productData={productData} />

        </div>)


}

export default ProductPage;

