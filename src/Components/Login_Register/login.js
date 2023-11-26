import Navbar from '../Navigation_Bar/navbar';
import React,{useEffect,useState,createContext} from 'react';
import { Avatar, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
export const loginstate= React.createContext()
const Login = (props) => {

    const url = 'http://localhost:3002/posts';
    const [currentloginstate, setCurrentloginstate] = useState(false);
    const [usrname, setUsrname] = useState('');
    const [pass, setPassword] = useState('');
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      axios.get(url).then((Response) => {
        console.log('Response data:', Response.data);
        setItems(Response.data);
        setError(true);
      }).catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);
    
    const HandleLogin = () => {
      console.log('items:', items);
      items.map((item) => {
        console.log('item:', item);
        if (usrname === item.username && pass === item.password) {
          setCurrentloginstate(true);
          setError(true);
        } else {
          setCurrentloginstate(false);
        }
      });
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
  return (
  <React.Fragment>
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
            {error?<Typography color={'red'} variant='6'>*Inavalid Username or Password</Typography>:null}
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
    <loginstate.Provider value={currentloginstate}>
                        <Navbar/>
    </loginstate.Provider>
    </React.Fragment>
  );
};

export default Login;