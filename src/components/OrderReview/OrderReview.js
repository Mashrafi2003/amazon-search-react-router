import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
// import Product from '../Product/Product';
import ReviewItems from '../ReviewItems/ReviewItems';

const OrderReview = () => {
    const [products , setProducts ] = useProducts();
    const [cart , setCart] = useCart(products);
    const handleRemove = (key)=>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart)
        
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItems
                    product = {product}
                    key={product.key}
                    handleRemove = {handleRemove}

                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>    
            </div>            
        </div>
    );
};

export default OrderReview;