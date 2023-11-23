import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import loginstate from '../Login_Register/login';
import Afterloginbtns from './afterloginbtns';
import Beforeloginbtns from './beforelogin';
import Login from '../Login_Register/login';
import Menubar from './menubar';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const mycon=useContext(loginstate);
  const isLoggedInd=mycon;
  return (
    <AppBar position="static" style={{ backgroundColor: '#164778' }}>
      <Toolbar>
        <Menubar/>
        <Typography fontFamily={'Goudy Old Style'} className='navbar_heading' variant="h6" color="inherit" style={{flexGrow: 1}}>
          Medical Records Management System
        </Typography>
        {
         isLoggedInd?<Afterloginbtns/>:
          <Link to='/login'>
            <div className='beforeloginbtn'>
              <Button sx={{ color: 'white' }}>Login</Button>
            </div>
          </Link>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
