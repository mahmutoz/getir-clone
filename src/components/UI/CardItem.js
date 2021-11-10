import React from 'react';

function CardItem({ card: { id, img, title, description } }) {
  return (
    <div className="flex justify-center items-center flex-col bg-white rounded-lg pt-14 px-4 pb-10 text-center shadow-sm">
      <img src={img} alt={`image_${id}`} />
      <h4 className="text-lg text-primary-brand-color font-semibold mt-6">
        {title}
      </h4>
      <p className="mt-2 text-gray-500 text-sm">{description}</p>
    </div>
  );
}

export default CardItem;
