import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import { Avatar, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
 const Login = (props) => {
    const url=' http://localhost:3002/posts';
  const [usrname,setUsrname] = useState('');
  const [pass,setPassword] = useState('');
  const [items,setItems] =useState([]);
  const [error,setError] =useState(true);
  useEffect(()=>{axios.get(url).then((Response)=>{setItems(Response.data);setError(false);})
  .catch((error)=>{console.error(error);})},[]);
  const HandleLogin= () =>
  {
    {
      items.map((item) => {
        if (usrname == item.username && pass == item.password) {
          handleLogin(true); // use the prop here
          setError(false);
          console.log("hello");
        }
        else 
        {
          setError(false);
        }
      });
    }
  }
  const paperStyle = {
    padding: 4,
    height: '60vh',
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
  if(error)
  {
    return <h1>Error!</h1>
  }
  return (
    // Use the Container component to center your content horizontally
    <Container maxWidth="sm">
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh'}}>
        <Paper elevation={3} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>!</Avatar>
            <Typography variant="h4" style={{ marginTop: '20px' }}>
              Sign In
            </Typography>
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              Enter your details to login to your account
            </Typography>
            <br/>
            <Typography variant="h5" style={{textAlign:'left',marginLeft:'30px'}}>
              Username
            </Typography>
            <TextField
              id="email"
              label="Enter your Username"
              variant="outlined"
              style={textStyle}
              onChange={(e)=>setUsrname(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <br/>
            {error?<Typography variant='h6'>Inavalid Username or Password</Typography>:null
            }
            <br/>
              <Button
                type="submit"
                sx={buttonStyle}
                variant="contained"
                onClick={HandleLogin}
              >
                login
              </Button>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;