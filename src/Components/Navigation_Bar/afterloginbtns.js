import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
export default function Afterloginbtns() 
{
  const navigate=useNavigate();
    const theme = createTheme({
        typography: {
          button: {
            fontFamily: 'Goudy Old Style',
            fontSize: 18,
          },
        },
      });
      const handleAppointment = () =>{
        navigate('/appointment')
      } 
      const handleProfile = () =>{
        navigate('/profile')
      } 
      const handleRecords= () =>{
        navigate('/records');
      }
      const  handleAbout= () =>{
        navigate('/about');
      }
    return(
        <ThemeProvider theme={theme}>
            <div className='afterloginbtn'>
                <Button color="inherit" onClick={handleAbout}>About Us</Button>
                <Button color="inherit" onClick={handleAppointment}>Appointments</Button>
                <Button color="inherit" onClick={handleRecords}>Records</Button>
                <Button color="inherit" onClick={handleProfile}>Profile</Button>
            </div>
        </ThemeProvider>
    );
}