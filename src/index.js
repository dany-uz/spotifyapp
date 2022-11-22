// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// App imports
import { Menu } from './Menu/Menu-component';
import { Footer } from './Footer/Footer-component'
import { Rutas } from './Routes/Routes-component';

// Bootstrap import
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Rutas />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);