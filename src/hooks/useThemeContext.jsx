import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function useThemeContext() {
  return useContext(ThemeContext);
}

export default useThemeContext;