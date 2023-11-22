import React from 'react';
import { Avatar, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

const Register = (props) => {
  // Use the Box component to apply custom styles to any element
  const paperStyle = {
    padding: 4,
    height: '75vh',
    width: '40vh',
    margin: '20px auto',
  };

  const avatarStyle = {
    backgroundColor: '#0c7384',
    width: { xs: '50px', sm: '100px' },
    height: { xs: '50px', sm: '100px' },
  };

  const textStyle = {
    width: '250px',
    marginTop: 2,
  };

  const buttonStyle = {
    marginTop: 4,
    width: '150px',
    backgroundColor: '#0e7081',
    color: '#f7efef',
  };

  return (
    // Use the Container component to center your content horizontally
    <Container maxWidth="sm">
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh'}}>
        <Paper elevation={3} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>!</Avatar>
            <Typography variant="h4" style={{ marginTop: '20px' }}>
              Sign Up
            </Typography>
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              Enter your details to create an account
            </Typography>
            <Typography variant="h5" style={{textAlign:'left',marginLeft:'30px'}}>
              Name
            </Typography>
            <TextField
              id="name"
              label="Enter your Name"
              variant="outlined"
              style={textStyle}
              required
            />
            <br/>
            <Typography variant="h5" style={{textAlign:'left',marginLeft:'30px'}}>
              Email
            </Typography>
            <TextField
              id="email"
              label="Enter your email-id"
              variant="outlined"
              style={textStyle}
              required
              />
            <br/>
            <Typography variant="h5" style={{textAlign:'left',marginLeft:'30px'}}>
              Password
            </Typography>
            <TextField
              id="password"
              label="Enter your Password"
              type="password"
              variant="outlined"
              style={textStyle}
              required
            />
            <br/>
            <br/>
            <TextField
              id="confirmPassword"
              label="Confirm your Password"
              type="password"
              variant="outlined"
              style={textStyle}
              required
            /><br/>
            <Button
              type="submit"
              sx={buttonStyle}
              variant="contained"
            >
              Register
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Register;