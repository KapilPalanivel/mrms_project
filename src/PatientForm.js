import React, { useState } from 'react';
import { Button, TextField, Typography, Grid } from '@mui/material';
import PatientService from './PatientService';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await PatientService.addPatient({ name, email });
      // Simulating a successful form submission
      console.log('Patient added successfully.');
      // You can also fetch the updated patient list here if needed

      // Clear the form after submission
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add Patient
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default PatientForm;
