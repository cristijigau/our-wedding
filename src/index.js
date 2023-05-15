import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/our-wedding/*" element={<App />} />
        <Route path="/" element={<Navigate to="/our-wedding" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
