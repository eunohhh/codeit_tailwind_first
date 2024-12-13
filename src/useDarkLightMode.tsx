import { useCallback, useState } from 'react';

export const useDarkLightMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    const mode = localStorage.getItem('darkmode');
    if (mode === 'true') {
      localStorage.setItem('darkmode', 'false');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('darkmode', 'true');
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode((prev) => !prev);
  }, []);

  return { isDarkMode, toggleDarkMode };
};
