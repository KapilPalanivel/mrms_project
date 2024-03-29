import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; // Correct the path
import Menubar from './menubar';
import './navbar.css';
import Afterloginbtns from './afterloginbtns';
import Login from '../Login_Register/login';

const Navbar = ({ isLoggedInd }) => {
  const { isAuthenticated, login, logout } = useAuth(); // Use useAuth here
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={{ height: '200px' }}>
      <AppBar position={isScrolled ? "fixed" : "static"} style={{ backgroundColor: '#164778' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          {isAuthenticated ? <Menubar /> : null}
          <Typography fontFamily={'Goudy Old Style'} className="navbar_heading" variant="h6" color="inherit" style={{ margin: '20px', textAlign: 'center' }}>
            {isAuthenticated ? (
              <Link to="/home" style={{ textDecoration: 'none', color: 'white', fontFamily: 'cursive' }}>Medical Records Management System</Link>
            ) : (
              <span style={{ textDecoration: 'none', color: 'white', fontFamily: 'cursive' }}>Medical Records Management System</span>
            )}
          </Typography>
          {isAuthenticated ? (
            <Afterloginbtns onLogout={handleLogout} />
          ) : null}
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
