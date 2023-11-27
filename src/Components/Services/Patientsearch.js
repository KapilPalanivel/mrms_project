import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patients, setPatients] = useState([]);
  const [patientNotFound, setPatientNotFound] = useState(false);
  const navigate=useNavigate();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Fetch patients based on the search query
    axios.get(`http://localhost:3002/patient?q=${searchQuery}`)
      .then(response => {
        setPatients(response.data);
        setPatientNotFound(response.data.length === 0);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
        setPatientNotFound(true);
      });
  };
  const handleAddRecord = () => {
    navigate('/patientform');
  }; 
  

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px',height:'100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4">Patient Search</Typography>

        {/* Search bar and button */}
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>

        {patientNotFound ? (
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Patient doesn't exist.
            <Button variant="outlined" color="primary" onClick={handleAddRecord}>
              Add New Record
            </Button>
          </Typography>
        ) : (
          <>
            {/* Display patient list */}
            <List style={{ marginTop: '20px' }}>
              {patients.map(patient => (
                <ListItem key={patient.id}>
                  <ListItemText
                    primary={
                    <Typography variant="body1" color="black" fontWeight="bold" >
                        Name: {patient.name}
                    </Typography>}
                    secondary={
                        <>
                        <Typography variant="body1" color="black" >
                          Username: {patient.username}
                        </Typography>
                        <Typography variant="body1" color="black" >
                          Email: {patient.email}
                        </Typography>
                        <Typography variant="body1" color="black" >
                          Number: {patient.number}
                        </Typography>
                        <Typography variant="body1" color="black" >
                          Department: {patient.dept}
                        </Typography>
                        <Typography variant="body1" color="black" >
                          DOB: {patient.dob}
                        </Typography>
                        <Typography variant="body1" color="black" >
                          Sex: {patient.sex}
                        </Typography>
                      </>
                    }>
                    </ListItemText>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default PatientSearch;
