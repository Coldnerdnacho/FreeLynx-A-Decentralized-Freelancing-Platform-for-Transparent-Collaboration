import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Updated extension
import './index.css';

createRoot(document.getElementById('root')).render( // Removed non-null assertion '!'
  <StrictMode>
    <App />
  </StrictMode>
);