import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; // Correct the path
import Menubar from './menubar';
import './navbar.css';
import Afterloginbtns from './afterloginbtns';
import Login from '../Login_Register/login';

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth(); // Use useAuth here

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#164778' }}>
        <Toolbar>
          {isAuthenticated ? <Menubar /> : null}
          <Typography fontFamily={'Goudy Old Style'} className="navbar_heading" variant="h6" color="inherit" style={{ flexGrow: 1, margin: '20px', textAlign: 'center' }}>
            Medical Records Management System
          </Typography>
          {isAuthenticated ? (
            <Afterloginbtns onLogout={handleLogout} />
          ) : (
           null
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={login} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default Navbar;
