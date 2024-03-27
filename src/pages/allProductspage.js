import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../api';

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>All Products Page</h1>
      <ProductList products={products} />
    </div>
  );
}

export default AllProductsPage;
