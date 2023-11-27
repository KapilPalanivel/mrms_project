// import React from 'react';
// import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Routes, Route, Link } from 'react-router-dom';
// import Login from '../Login_Register/login';
// import Menubar from './menubar';
// import './navbar.css';

// const Navbar = (props) => {
//   const { isLoggedInd, onLogin } = props;

//   return (
//     <div>
//       <AppBar position="static" style={{ backgroundColor: '#164778' }}>
//         <Toolbar>
//           <Menubar />
//           <Typography fontFamily={'Goudy Old Style'} className="navbar_heading" variant="h6" color="inherit" style={{ flexGrow: 1 }}>
//             Medical Records Management System
//           </Typography>
//           {isLoggedInd ? null : (
//             <div className="beforeloginbtn">
//               <Button component={Link} to="/login" sx={{ color: 'white' }}>
//                 Login
//               </Button>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//       <Routes>
//         <Route path="/login" element={<Login onLogin={onLogin} />} />
//       </Routes>
//     </div>
//   );
// };

// export default Navbar;

//new

// Navbar.js
import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../Login_Register/login';
import Menubar from './menubar';
import './navbar.css';
import Afterloginbtns from './afterloginbtns';
const Navbar = (props) => {
  const { isLoggedInd, onLogin } = props;

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#164778' }}>
        <Toolbar>
        {isLoggedInd ?
          <Menubar />:null
        }
          <Typography fontFamily={'Goudy Old Style'} className="navbar_heading" variant="h6" color="inherit" style={{ flexGrow: 1,margin:'20px',textAlign: 'center' }}>
            Medical Records Management System
          </Typography>
          {isLoggedInd ? <Afterloginbtns/> : (
            <div className="beforeloginbtn">
              <Button component={Link} to="/login" sx={{ color: 'white' }}>
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/login" element={<Login onLogin={onLogin} />} />
      </Routes>
    </div>
  );
};

export default Navbar;
