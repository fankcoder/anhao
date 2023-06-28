import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Account from './Pages/Account'
import Download from './Pages/download'
import Community from './Pages/community'
import Policy from './Pages/Policy'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="community" element={<Community />} />
        <Route path="account" element={<Account />} />
        <Route path="download" element={<Download />} />
        <Route path="policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
