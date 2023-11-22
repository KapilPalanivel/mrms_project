import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Afterloginbtns() 
{
    const theme = createTheme({
        typography: {
          button: {
            fontFamily: 'Goudy Old Style',
            fontSize: 18,
          },
        },
      });
    return(
        <ThemeProvider theme={theme}>
            <div className='afterloginbtn'>
                <Button color="inherit">Records</Button>
                <Button color="inherit">Appointments</Button>
                <Button color="inherit">Billing</Button>
            </div>
        </ThemeProvider>
    );
}