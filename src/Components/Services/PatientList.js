import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const url = 'http://localhost:3002/patient';

  useEffect(() => {
    axios.get(url).then((response) => {
      setPatients(response.data);
    });
  }, []);

  return (
    <div style={{height:'100vh'}}>
      <Typography variant="h4" gutterBottom>
        Patient List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department Consulting</TableCell>
              {/* Add more table headers based on your patient data */}
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.number}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.dept}</TableCell>
                {/* Add more table cells based on your patient data */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientList;
