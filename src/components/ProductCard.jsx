import React from 'react';
import "./product.css";

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
        <h1>Product List</h1>
        <div className="product-wrapper">
            <img src={product.image} alt={product.title}/>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard;