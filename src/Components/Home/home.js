import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you use React Router

const HomePage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4">Medical Record Management System</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h5">View Medical Records</Typography>
            <Typography>
              View and manage electronic medical records for patients.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/medical-records">
              View Records
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h5">Add New Record</Typography>
            <Typography>
              Add a new medical record for a patient.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/add-record">
              Add Record
            </Button>
          </Paper>
        </Grid>
        {/* Add more Grid items based on your application features */}
      </Grid>
    </Container>
  );
};

export default HomePage;
