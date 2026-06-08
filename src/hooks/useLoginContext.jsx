import { useContext } from 'react';
import LoginContext from '../context/Logincontext';

function useLoginContext() {
  return useContext(LoginContext);
}

export default useLoginContext;
