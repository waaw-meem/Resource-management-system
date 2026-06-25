import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from './context/Logincontext';
import { MenuProvider } from './context/MenuContext';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/manrope';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Provider>
  </BrowserRouter>
);

