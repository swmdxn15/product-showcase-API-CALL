
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const API_URL = 'https://fakestoreapi.com/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Filter products based on the search term
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app">
      <h1>Product Showcase App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search Products.."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {products?.length > 0 ? (
        <div className="product-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No products found</h2>
        </div>
      )}
    </div>
  );
};

export default ProductList;
