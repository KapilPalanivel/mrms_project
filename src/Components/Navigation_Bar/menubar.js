import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
export default function Menubar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
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
          <MenuItem onClick={handleClose}>Search Patients</MenuItem>
          <MenuItem onClick={handleClose}>Add New Patient</MenuItem>
          <MenuItem onClick={handleClose}>Edit Patient Information</MenuItem>
        </Menu>
        </div>
    )
}