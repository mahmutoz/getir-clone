import { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import { useWindowSize } from '../Hook/windowSize';
import { IoIosArrowDown } from 'react-icons/io';

function FooterInfoMenu({ title, items }) {
  const [width] = useWindowSize('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && width <= 768) setIsOpen(false);

    if (!isOpen && width > 768) setIsOpen(true);
  }, [width]);

  const toggleCollapse = () => {
    if (width <= 768) setIsOpen(!isOpen);
  };

  return (
    <div>
      <h3
        onClick={toggleCollapse}
        className="flex justify-between text-primary-brand-color text-lg md:pb-2"
      >
        {title}
        <button className="md:hidden flex text-primary-brand-color bg-purple-100 rounded-lg p-2 font-semibold transition-all">
          <span
            className={`transform transition-all ${isOpen ? 'rotate-180' : ''}`}
          >
            {' '}
            <IoIosArrowDown />
          </span>
        </button>
      </h3>
      <Collapse isOpened={isOpen}>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="py-2 text-sm text-gray-600">
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}

export default FooterInfoMenu;
