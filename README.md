# Getir.com clone with React.js + Tailiwnd.css

## Demo

[Getir.com Clone](https://getir-website-clone.netlify.app/)

## In the project directory, you can run:

```cmd
yarn start
```

## NPM Packages

- [react-flags-select](https://www.npmjs.com/package/react-flags-select)
- [react-slick](https://react-slick.neostack.com/)
- [react-collapse](https://www.npmjs.com/package/react-collapse)
- [react-icons](https://react-icons.github.io/)

## Custom 'window-size' hook

React hook for updating components when the size or orientation of the window
changes.

```javascript
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
```
