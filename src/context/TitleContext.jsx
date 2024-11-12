// src/context/TitleContext.js
import { createContext, useState, useContext } from 'react';

const TitleContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTitle = () => useContext(TitleContext);

// eslint-disable-next-line react/prop-types
export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  return (
    <TitleContext.Provider value={{ title, setTitle, subtitle, setSubtitle }}>
      {children}
    </TitleContext.Provider>
  );
};
