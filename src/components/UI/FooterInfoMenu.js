import React from 'react';

function FooterInfoMenu({ title, items }) {
  return (
    <div>
      <h3 className="text-primary-brand-color text-lg pb-2">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-2 text-sm text-gray-600">
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterInfoMenu;
