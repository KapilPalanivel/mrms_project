import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    number: '',
    email: '',
    password: '',
    dept: '',
    dob: '',
  });

  const url = 'http://localhost:3002/patient';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{height:'100vh'}}>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4">Patient Information Form</Typography>

        {/* Input fields for patient information */}
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={formData.username}
          required
        />

        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <TextField
          id="number"
          name="number"
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={formData.number}
          required
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <TextField
          id="dept"
          name="dept"
          label="Department"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={formData.dept}
          required
        />

        <TextField
          id="dob"
          name="dob"
          label="Date of Birth"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
          value={formData.dob}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button variant="contained" color="primary" onClick={useEffect(()=>{
        axios.post(url, formData)
          .then((response) => {
            console.log('Patient saved successfully:', response.data);
          })
          .catch((error) => {
            console.log(formData);
            console.error('Error saving patient:', error);
          });
      },[])} >
          Save Patient
        </Button>
      </Paper>
    </Container>
    </div>
  );
};

export default PatientForm;
