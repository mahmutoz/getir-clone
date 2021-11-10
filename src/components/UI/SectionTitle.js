import React from 'react';

function SectionTitle({ children }) {
  return (
    <h3 className="font-semibold text-sm mb-2 text-gray-dark px-2 md:px-0">
      {children}
    </h3>
  );
}

export default SectionTitle;
