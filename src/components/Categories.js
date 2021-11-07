import { useState, useEffect } from 'react';
import categoriesData from 'api/categories';
import Category from './Category';

function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <h3 className="font-semibold text-sm text-gray-dark">Kategoriler</h3>
        <div className="grid grid-cols-10 gap-4">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
