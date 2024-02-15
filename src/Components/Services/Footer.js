import React from 'react';
import { Grid, Typography, Link, Box } from '@mui/material';
import Divider from '@mui/material/Divider';

// Define an array of footer sections with title and links
const footerSections = [
  {
    title: "About",
    links: ["Our Story", "Team", "Careers"]
  },
  {
    title: "Services",
    links: ["How it works", "Testimonials", "Pricing"]
  },
  {
    title: "Contact Us",
    links: ["Support", "Sales", "Press"]
  },
  {
    title: "Products",
    links: ["Electronic Health Record", "Lab", "Pharmacy", "OP Billing"]
  }
];

const Footer = () => {
  return (
    // Use map function to iterate over the footer sections and render them as grid items
    // Add alignItems="center" to align the content vertically
    <Grid container spacing={1} justifyContent="center" alignItems="center"
    sx={{backgroundColor:"#3b3b3b" , color:"#fff" , pt:{lg:'15px' , md:'12px' , sm:'10px' , xs:'7px'}}}>
      {footerSections.map(section => (
        <Grid item xs={12} sm={3} sx={{display:'flex' , flexDirection:'column' , gap:2}} key={section.title}>
          <Typography variant="h5">{section.title}</Typography>
          <Divider sx={{borderColor:'#fff' , width:{ld:'150px' , md:'150px' , sm:'110px' , xs:'100px'}}}/>
          {section.links.map(link => (
            // Add sx={{textAlign:'center'}} to align the links horizontally
            <Link href="#" color="inherit" underline='none' key={link} sx={{textAlign:'center'}}>{link}</Link>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;
