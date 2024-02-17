import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Button } from '@mui/material';

const DepartmentsPage = () => {
  // Define departments data
  const departments = [
    {
      id: 1,
      name: 'Cardiology',
      definition: 'Cardiology is the branch of medicine that deals with the study and treatment of disorders of the heart and blood vessels.',
      excellence: 'Our Cardiology department is renowned for its advanced treatments and innovative research in heart health.'
    },
    {
      id: 2,
      name: 'Oncology',
      definition: 'Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.',
      excellence: 'Our Oncology department offers comprehensive cancer care with state-of-the-art treatments and compassionate support.'
    },
    {
      id: 3,
      name: 'Orthology',
      definition: 'Orthology is the branch of medicine that deals with the study and treatment of musculoskeletal disorders and injuries.',
      excellence: 'Our Orthology department provides expert care for bone, joint, and muscle conditions, helping patients regain mobility and strength.'
    },
    {
      id: 4,
      name: 'Neurology',
      definition: 'Neurology is the branch of medicine that deals with disorders of the nervous system, including the brain, spinal cord, and nerves.',
      excellence: 'Our Neurology department is at the forefront of diagnosing and treating neurological conditions, offering personalized care and the latest therapies.'
    }
  ];

  return (
    <div>
      <h1>Departments</h1>
      {departments.map(department => (
        <Paper key={department.id} elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h5" gutterBottom>{department.name}</Typography>
          <Typography variant="body1" gutterBottom><strong>Definition:</strong> {department.definition}</Typography>
          <Typography variant="body1" gutterBottom><strong>Excellence:</strong> {department.excellence}</Typography>
          <Button component={Link} to={`/departments/${department.id}`} variant="contained" color="primary">
            Learn More
          </Button>
        </Paper>
      ))}
    </div>
  );
};

export default DepartmentsPage;
