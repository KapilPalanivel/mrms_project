import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import Divider from '@mui/material/Divider';

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

const Footer = ({ isAuthenticated }) => {
  return (
    isAuthenticated && (
      <div className="footer-container">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#3b3b3b",
            color: "#fff",
            pt: { lg: '15px', md: '12px', sm: '10px', xs: '7px' }
          }}
        >
          {footerSections.map(section => (
            <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} key={section.title}>
              <Typography sx={{ textAlign: 'center' }} variant="h5">{section.title}</Typography>
              <Divider sx={{ borderColor: '#fff', width: { lg: '150px', md: '150px', sm: '110px', xs: '100px', margin: 'auto' } }} />
              {section.links.map(link => (
                <Link href="#" color="inherit" underline='none' key={link} sx={{ textAlign: 'center' }}>{link}</Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
};

export default Footer;
