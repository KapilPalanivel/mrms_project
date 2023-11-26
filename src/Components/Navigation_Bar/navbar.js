import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
// import loginstate from '../Login_Register/login';
import Afterloginbtns from './afterloginbtns';
import Beforeloginbtns from './beforelogin';
import Login from '../Login_Register/login';
import Menubar from './menubar';
import { Link,BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  // const mycon=useContext(loginstate);
  const isLoggedInd=false;
  return (
    <Router>
    <AppBar position="static" style={{ backgroundColor: '#164778' }}>
      <Toolbar>
        <Menubar/>
        <Typography fontFamily={'Goudy Old Style'} className='navbar_heading' variant="h6" color="inherit" style={{flexGrow: 1}}>
          Medical Records Management System
        </Typography>
        {
         isLoggedInd?<Afterloginbtns/>:
            <div className='beforeloginbtn'>
              <Link to={'/login'}>
              <Button sx={{ color: 'white' }}>Login</Button>
              </Link>
            </div>
        }
      </Toolbar>
    </AppBar>
    </Router>
  );
};

export default Navbar;
