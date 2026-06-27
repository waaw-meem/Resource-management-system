import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from './context/Logincontext';
import { MenuProvider } from './context/MenuContext';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/manrope';
import './index.css';
import ThemeContext from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider>
      <MenuProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MenuProvider>
    </Provider>
  </BrowserRouter>
);

