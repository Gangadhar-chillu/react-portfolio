import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // JSX Element -> React Component
import reportWebVitals from './reportWebVitals';

// ReactDOM -> Help us to insert Virtual DOM(JSX) into Real Dom(index.html)
//Babel JS -> Trans-compiler -> JSX into Executable JS


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "bootstrap-icons/font/bootstrap-icons.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
