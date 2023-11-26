import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link,BrowserRouter as Router } from "react-router-dom";
import Login from '../Login_Register/login';
export default function Beforeloginbtns() 
{
    
    const theme = createTheme({
        typography: {
          button: {
            fontFamily: 'Goudy Old Style',
            fontSize: 18,
            color:'white'
          },
        },
      });
    return(
        <ThemeProvider theme={theme}>
          <Router/>
            <Link to='/login'>
              <div className='beforeloginbtn'>
                <Button sx={{ color: 'white' }}>Login</Button>
              </div>
            </Link>
            <Router/>
        </ThemeProvider>
    );
}