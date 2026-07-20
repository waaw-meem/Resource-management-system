import { useContext } from 'react';
import addResourceContext from '../context/AddResourceContext';

function useResourceContext() {
    return useContext(addResourceContext);
}

export default useResourceContext;
