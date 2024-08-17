import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (titles: Record<string, string>) => {
  const location = useLocation();

  useEffect(() => {
    const title = titles[location.pathname] || 'Newsdog'; // Default title
    document.title = title;
  }, [location, titles]);
};

export default usePageTitle;
