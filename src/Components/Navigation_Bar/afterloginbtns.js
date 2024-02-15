import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './Afterloginbtns.css'; // assuming you have a CSS file for custom styling

export default function Afterloginbtns() {

  const theme = createTheme({
    typography: {
      button: {
        fontFamily: 'Goudy Old Style',
        fontSize: 18,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className='afterloginbtn'>
        <Link className='link' to='/about' onMouseOver={(e) => {
          e.currentTarget.style.setProperty('--before-width', '50%');
        }} onMouseOut={(e) => {
          e.currentTarget.style.setProperty('--before-width', '0');
        }}>About Us</Link>
        
        <Link className='link' to='/appointment' onMouseOver={(e) => {
          e.currentTarget.style.setProperty('--before-width', '50%');
        }} onMouseOut={(e) => {
          e.currentTarget.style.setProperty('--before-width', '0');
        }}>Appointments</Link>
        
        <Link className='link' to='/records' onMouseOver={(e) => {
          e.currentTarget.style.setProperty('--before-width', '50%');
        }} onMouseOut={(e) => {
          e.currentTarget.style.setProperty('--before-width', '0');
        }}>Records</Link>
        
        <Link className='link' to='/profile' onMouseOver={(e) => {
          e.currentTarget.style.setProperty('--before-width', '50%');
        }} onMouseOut={(e) => {
          e.currentTarget.style.setProperty('--before-width', '0');
        }}>Profile</Link>
      </div>
    </ThemeProvider>
  );
}
