import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login_Register/login';
import Navbar from './Components/Navigation_Bar/navbar';
import HomePage from './Components/Home/home';
import kmchBackground from './kmch.jpg';
import PatientList from './Components/Services/PatientList';
import PatientForm from './Components/Services/PatientForm';
import PatientSearch from './Components/Services/Patientsearch';
import Appointments from './Components/Services/Appointments';
import Profile from './Components/Services/Profile';
import Footer from './Components/Services/Footer';
import Records from './Components/Services/Records';
import AboutUs from './Components/Services/About';
function App() {
  const [isLoggedInd, setIsLoggedInd] = useState(false);

  const handleLogin = () => {
    setIsLoggedInd(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="App" style={{ backgroundImage: `url(${kmchBackground})`, flex: 1 }}>
        <Navbar isLoggedInd={isLoggedInd} onLogin={handleLogin}/>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/patientlist" element={<PatientList />} />
          <Route path="/patientform" element={<PatientForm />} />
          <Route path="/patientsearch" element={<PatientSearch />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/records" element={<Records />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;