import { useState, useEffect } from 'react';
import Title from './UI/SectionTitle';
import ProductsData from '../api/products.json';
import Product from './UI/Product';

function Favourites(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsData);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 border border-gray-50 rounded-md mb-6">
        {products.length &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Favourites;
