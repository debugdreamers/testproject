import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add custom CSS variables for our theme colors
const addCssVariables = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    :root {
      --primary-50: #f9f6f2;
      --primary-100: #f1ebe0;
      --primary-200: #e6d8c2;
      --primary-300: #d9c5a3;
      --primary-400: #ccb285;
      --primary-500: #bfa066;
      --primary-600: #a68b57;
      --primary-700: #8c7548;
      --primary-800: #725e3a;
      --primary-900: #594b2e;
      
      --secondary-50: #f6f3f0;
      --secondary-100: #e8e0d5;
      --secondary-200: #d5c3ad;
      --secondary-300: #c2a686;
      --secondary-400: #b08a63;
      --secondary-500: #9d6e40;
      --secondary-600: #885b34;
      --secondary-700: #734a29;
      --secondary-800: #5e3a1f;
      --secondary-900: #492c16;
    }
  `;
  document.head.appendChild(style);
};

// Call the function before rendering
addCssVariables();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);