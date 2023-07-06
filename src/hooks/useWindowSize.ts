import { useState, useEffect } from 'react';

interface Size {
  windowWidth: number;
  windowHeight: number;
}

export default function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    windowWidth: 0,
    windowHeight: 0
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { windowWidth, windowHeight } = windowSize;
  return { windowWidth, windowHeight };
}
