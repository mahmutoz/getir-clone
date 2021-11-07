import React from 'react';
function Category({ category: { id, title, image } }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      key={id}
      href="#"
      className="flex items-center justify-center flex-col h-28 transition-all hover:bg-purple-100 group"
    >
      <img
        width="48"
        height="48"
        src={image}
        alt="{title}"
        className="border rounded-lg"
      />
      <h5 className="mt-3 text-center font-semibold text-sm text-gray-dark group-hover:text-primary-brand-color tracking-tight">
        {title}
      </h5>
    </a>
  );
}

export default Category;
