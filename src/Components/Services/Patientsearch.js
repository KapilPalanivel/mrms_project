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
  const [editPatientId, setEditPatientId] = useState(null);
  const [editedPatient, setEditedPatient] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [patientNotFound, setPatientNotFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setErrorMessage('Please provide a search query.');
      return;
    }

    axios
      .get(`http://localhost:3002/patient?q=${searchQuery}`)
      .then((response) => {
        setPatients(response.data);
        setPatientNotFound(response.data.length === 0);
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error fetching patients:', error);
        setPatientNotFound(true);
        setErrorMessage('');
      });
  };

  const handleEdit = (index, patient) => {
    setEditPatientId(index);
    setEditedPatient(patient);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3002/patient/${editedPatient.id}`, editedPatient)
      .then(() => {
        setSuccessMessage('Details saved successfully');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
        // Clear edit mode after saving
        setEditPatientId(null);
        setEditedPatient(null);
      })
      .catch((error) => {
        console.error('Error saving patient details:', error);
      });
  };

  const handleCancelEdit = () => {
    // Clear edit mode without saving
    setEditPatientId(null);
    setEditedPatient(null);
  };

  const handleAddRecord = () => {
    navigate('/patientform');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4">Patient Search</Typography>

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

        {errorMessage && (
          <Typography variant="body1" style={{ marginTop: '20px', color: 'red' }}>
            {errorMessage}
          </Typography>
        )}

        {patientNotFound ? (
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            Patient doesn't exist.
            <Button
              variant="outlined"
              color="primary"
              onClick={handleAddRecord}
              style={{ marginLeft: '10px' }}
            >
              Add New Record
            </Button>
          </Typography>
        ) : (
          <>
            <List style={{ marginTop: '20px' }}>
              {patients.map((patient, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="black" fontWeight="bold">
                        Name: {patient.name}
                      </Typography>
                    }
                    secondary={
                      <>
                        <TextField
                          label="Username"
                          defaultValue={patient.username}
                          style={{ marginBottom: '20px' }}
                          disabled={editPatientId !== index}
                          onChange={(e) =>
                            setEditedPatient({
                              ...editedPatient,
                              username: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Email"
                          defaultValue={patient.email}
                          style={{ marginBottom: '20px', marginLeft: '20px' }}
                          disabled={editPatientId !== index}
                          onChange={(e) =>
                            setEditedPatient({
                              ...editedPatient,
                              email: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Number"
                          defaultValue={patient.number}
                          style={{ marginBottom: '20px' }}
                          disabled={editPatientId !== index}
                          onChange={(e) =>
                            setEditedPatient({
                              ...editedPatient,
                              number: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Department"
                          defaultValue={patient.dept}
                          style={{ marginBottom: '20px', marginLeft: '20px' }}
                          disabled={editPatientId !== index}
                          onChange={(e) =>
                            setEditedPatient({
                              ...editedPatient,
                              dept: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="DOB"
                          defaultValue={patient.dob}
                          style={{ marginBottom: '20px' }}
                          disabled={editPatientId !== index}
                          onChange={(e) =>
                            setEditedPatient({
                              ...editedPatient,
                              dob: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Sex"
                          defaultValue={patient.sex}
                          style={{ marginBottom: '20px', marginLeft: '20px' }}
                          disabled={editPatientId !== index}
                          onChange={(e) =>
                            setEditedPatient({
                              ...editedPatient,
                              sex: e.target.value,
                            })
                          }
                        />
                        {editPatientId === index ? (
                          <Button
                            variant="contained"
                            color="success"
                            onClick={handleSave}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="info"
                            onClick={() => handleEdit(index, patient)}
                          >
                            Edit
                          </Button>
                        )}
                        {successMessage && (
                          <Typography
                            variant="body1"
                            style={{ color: 'green', marginTop: '20px' }}
                          >
                            {successMessage}
                          </Typography>
                        )}
                      </>
                    }
                  />
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
