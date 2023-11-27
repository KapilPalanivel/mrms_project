// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router> {/* Wrap your App with Router */}
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
