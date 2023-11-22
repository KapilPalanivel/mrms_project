import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
            <div className='beforeloginbtn'>
                <Button sx={{color:'white'}}>Login</Button>
            </div>
        </ThemeProvider>
    );
}