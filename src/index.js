import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './pages/CartContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <CartProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </CartProvider>,
  rootElement
);

reportWebVitals();
