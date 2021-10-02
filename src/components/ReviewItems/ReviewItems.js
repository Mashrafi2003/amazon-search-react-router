import React from 'react';

const ReviewItems = (props) => {
    const {name , price , quantity, img , key} = props.product;
    const {handleRemove} = props
    return (
        <div className='product'>
        <div>
             <img src={img} alt="" />
        </div>
        <div>
        <h4 className='product-name'>{name}</h4>
            <h5>Price : {price}</h5>
            <h5>Quantity : {quantity}</h5>
            <button
            onClick={()=>handleRemove(key)}
            className='btn-regular'>Remove</button>  
        </div>          
        </div>
    );
};

export default ReviewItems;