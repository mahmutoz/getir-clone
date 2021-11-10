import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

function DeliveryAddress() {
  return (
    <div className="md:hidden flex items-center justify-between bg-white p-2">
      <span className="font-semibold text-sm flex text-gray-dark">
        <MdLocationOn className="block text-brand-color" size={20} /> Teslimat
        Adresi Belirle
      </span>
      <span>
        <IoIosArrowForward className="block text-brand-color" />
      </span>
    </div>
  );
}

export default DeliveryAddress;
