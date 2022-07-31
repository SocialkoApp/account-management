import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { EmailConfirm } from './screens/EmailConfirm';
import { Home } from './screens/Home';
import { PasswordReset } from './screens/PasswordReset';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/confirm-email/:token" element={<EmailConfirm />} />
        <Route path="/forgot-password/:code" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
