import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Account from './Pages/Account'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);