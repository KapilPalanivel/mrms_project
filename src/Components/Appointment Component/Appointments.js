import React, { useState } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Button, TextField } from '@mui/material';

import './Appointment.css';

const Appointments = () => {

  const [appointments, setAppointments] = useState([]);
  const today = new Date();
  const todayFormatted = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(today);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const removeAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  return (
    <div className='commonback' style={{paddingTop:'30px', height: '100vh' }}>
      <Typography variant="h4" sx={{ marginTop: '100px' }}>
        {todayFormatted}
      </Typography>

      <Paper elevation={7} sx={{ padding: '20px', background: 'white', borderRadius: '10px', marginBottom: '20px' }}>
        <TextField
          type="text"
          label="Enter appointment details"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: 'white', borderRadius: '5px' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addAppointment(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </Paper>

      {appointments.length === 0 ? (
        <Typography variant="body1" sx={{ color: 'red' }}>No appointments today.</Typography>
      ) : (
        <>
          <Typography variant="h4">
            <h1>Appointments Today:</h1>
          </Typography>
          <Paper>
            <List>
              {appointments.map((appointment, index) => (
                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <ListItemText primary={`${index + 1}. ${appointment}`} />
                  <Button onClick={() => removeAppointment(index)} variant="outlined" color="secondary">
                    Remove
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        </>
      )}

      {/* Add Appointment */}
    </div>
  );
};

export default Appointments;
