import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
export default function Menubar() {
    const navigate=useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDepartment = () => {
        navigate('/department');
        setAnchorEl(null);
    };
    const handlePatientSearch = () => {
        navigate('/patientsearch');
        setAnchorEl(null);
    };
    return(
        <div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onMouseOver={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="patients-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          MenuListProps={{onMouseLeave: handleClose,}}
          onMouseLeave={handleClose}
        >
          <MenuItem onClick={handlePatientSearch}>Search Patients</MenuItem>
          <MenuItem onClick={handleDepartment}>Department</MenuItem>
          <MenuItem onClick={handleClose}>Edit Patient Information</MenuItem>
        </Menu>
        </div>
    )
}