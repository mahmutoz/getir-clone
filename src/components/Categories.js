import { useState, useEffect } from 'react';
import categoriesData from 'api/categories';
import Category from './UI/Category';
import SectionTitle from './UI/SectionTitle';

function Categories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <SectionTitle>Kategoriler</SectionTitle>
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
