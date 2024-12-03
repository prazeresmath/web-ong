import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { VagasProvider } from './context/vagasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VagasProvider>
      <App />
    </VagasProvider>
  </React.StrictMode>
);