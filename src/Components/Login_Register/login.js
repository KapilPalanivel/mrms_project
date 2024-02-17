import React, { useState, useEffect } from 'react';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../Home/home';
import { useAuth } from '../../AuthContext';
 
const Login = () => {
  const url = 'http://localhost:3002/employee';
  const [formData, setFormData] = useState({
    usrname: '',
    pass: '',
  });
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [exist, setExist] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();  // Use the useAuth hook

  useEffect(() => {
    axios.get(url).then((response) => {
      setItems(response.data);
    });
  }, []);

  const HandleLogin = () => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (formData.usrname === item.username && formData.pass === item.password) {
        setError(false);
        setExist(true);
        login(true);
        navigate('/home');
        return;
      } else {
        setError(true);
        setExist(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='loginbody'>
      <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar style={{ backgroundColor: '#0c7384', width: '100px', height: '100px' }}>!</Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h4">Sign In</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Enter your details to login to your account</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="usrname"
                name="usrname"
                label="Enter your Username"
                variant="outlined"
                style={{ width: '250px' }}
                onChange={handleChange}
                value={formData.usrname}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                id="pass"
                name="pass"
                label="Enter your Password"
                type="password"
                variant="outlined"
                style={{ width: '250px' }}
                onChange={handleChange}
                value={formData.pass}
                required
              />
            </Grid>
            {error && (
              <Grid item>
                <Typography color="error">*Invalid Username or Password</Typography>
              </Grid>
            )}
            <Grid item>
              <Button variant="contained" onClick={HandleLogin}>Login</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Login;
