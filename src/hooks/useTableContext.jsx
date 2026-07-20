import { useContext } from 'react';
import TableContext from '../context/TableContext';

function useTableContext() {
  return useContext(TableContext);
}

export default useTableContext;