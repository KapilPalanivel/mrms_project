import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Afterloginbtns from './afterloginbtns';
import Beforeloginbtns from './beforelogin';
import Menubar from './menubar';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  const [isLoggedInd,setIsLoggedIn] = useState(false);
  const handleLogin = (value) => {
    setIsLoggedIn(value);
  };
  return (
    <AppBar position="static" style={{ backgroundColor: '#164778' }}>
      <Toolbar>
        <Menubar/>
        <Typography fontFamily={'Goudy Old Style'} className='navbar_heading' variant="h6" color="inherit" style={{flexGrow: 1}}>
          Medical Records Management System
        </Typography>
        {
         isLoggedInd?null: 
          <Link to='/login'>
            <Beforeloginbtns/>
          </Link>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
