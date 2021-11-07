import React from 'react';

function Product({ product: { id, title, image, alt, price } }) {
  return (
    <div className="text-center bg-white border border-gray-50 px-2 py-3 text-sm relative">
      <a
        href="#"
        className="absolute top-3 right-3 px-[10px] py-[2px] flex content-center items-center text-xl rounded-md shadow-md text-primary-brand-color font-semibold bg-white border border-gray-100 transition-all hover:border-primary-brand-color"
      >
        +
      </a>
      <figure width="120" height="120">
        <img src={image} alt={title} />
      </figure>
      <span className="text-primary-brand-color font-semibold">₺{price}</span>
      <p className="font-semibold mb-1">{title}</p>
      <span className="text-gray-500">{alt}</span>
    </div>
  );
}

export default Product;
