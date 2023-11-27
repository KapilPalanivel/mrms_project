import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
const Records = () => {
  const navigate = useNavigate();

  const handleViewRecords = () => {
    navigate('/patientlist');
  };

  const handleAddRecord = () => {
    navigate('/patientform');
  };

  return (
    <div className='homediv'>
      <Container maxWidth="md" style={{ marginTop: '20px', verticalAlign: '50vh' }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: '20px', height: '16vh', textAlign: 'center' }}>
              <Typography variant="h5">View Medical Records</Typography>
              <Typography>
                View and manage electronic medical records for patients.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '10px' }}
                onClick={handleViewRecords}
              >
                View Records
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: '20px', height: '16vh', textAlign: 'center' }}>
              <Typography variant="h5">Add New Record</Typography>
              <Typography>
                Add a new medical record for a patient.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '10px' }}
                onClick={handleAddRecord}
              >
                Add Record
              </Button>
            </Paper>
          </Grid>
          {/* Add more Grid items based on your application features */}
        </Grid>
      </Container>
    </div>
  );
};
export default Records;