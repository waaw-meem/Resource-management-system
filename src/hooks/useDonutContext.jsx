import { useContext } from 'react';
import DonutContext from '../context/DonutContext';

function useDonutContext() {
  return useContext(DonutContext);
}

export default useDonutContext;
