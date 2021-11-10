import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return size;
}

export { useWindowSize };
