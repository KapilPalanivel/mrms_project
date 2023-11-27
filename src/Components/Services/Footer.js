import React from 'react';
import { Grid, Typography, Link, Box } from '@mui/material';
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <Grid container spacing={1} justifyContent="center" 
    sx={{backgroundColor:"#3b3b3b" , color:"#fff" , pt:{lg:'15px' , md:'12px' , sm:'10px' , xs:'7px'}}}>
      <Grid item xs={12} sm={3}  sx={{display:'flex' , flexDirection:'column' , gap:2}}>
        <Typography variant="h5">About</Typography>
        <Divider sx={{borderColor:'#fff' , width:{ld:'150px' , md:'150px' , sm:'110px' , xs:'100px'}}}/>
        <Link href="#" color="inherit" underline='none'>Our Story</Link>
        <Link href="#" color="inherit"  underline='none' >Team</Link>
        <Link href="#" color="inherit"  underline='none' >Careers</Link>
      </Grid>
      <Grid item xs={12} sm={3} sx={{display:'flex' , flexDirection:'column' , gap:2}}>
        <Typography variant="h5">Services</Typography>
        <Divider sx={{borderColor:'#fff' , width:{ld:'150px' , md:'150px' , sm:'110px' , xs:'100px'}}}/>
        <Link href="#" color="inherit"  underline='none' >How it works</Link>
        <Link href="#" color="inherit"  underline='none' >Testimonials</Link>
        <Link href="#" color="inherit"  underline='none' >Pricing</Link>
      </Grid>
      <Grid item xs={12} sm={3} sx={{display:'flex' , flexDirection:'column' , gap:2}}>
        <Typography variant="h5">Contact Us</Typography>
        <Divider sx={{borderColor:'#fff' , width:{ld:'150px' , md:'150px' , sm:'110px' , xs:'100px'}}}/>
        <Link href="#" color="inherit"  underline='none' >Support</Link>
        <Link href="#" color="inherit"  underline='none' >Sales</Link>
        <Link href="#" color="inherit"  underline='none' >Press</Link>
      </Grid>
      <Grid item xs={12} sm={3} sx={{display:'flex' , flexDirection:'column' , gap:2}}>
        <Typography variant="h5" >Products</Typography>
        <Divider sx={{borderColor:'#fff' , width:{ld:'150px' , md:'150px' , sm:'110px' , xs:'100px'}}}/>
        <Link href="#" color="inherit"  underline='none' >Electronic Health Record</Link>
        <Link href="#" color="inherit"  underline='none' >Lab</Link>
        <Link href="#" color="inherit"  underline='none' >Pharmacy</Link>
        <Link href="#" color="inherit"  underline='none' >OP Billing</Link>
      </Grid>
    </Grid>
  );
};

export default Footer;