// Simulating a service to fetch and add patients

const PatientService = {
    patients: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      // Add more sample patients as needed
    ],
  
    getPatients: () => {
      return new Promise((resolve) => {
        // Simulate an API request delay
        setTimeout(() => {
          resolve(PatientService.patients);
        }, 1000);
      });
    },
  
    addPatient: (patient) => {
      return new Promise((resolve) => {
        // Simulate an API request delay
        setTimeout(() => {
          PatientService.patients.push({ ...patient, id: PatientService.patients.length + 1 });
          resolve();
        }, 1000);
      });
    },
  };
  
  export default PatientService;
  