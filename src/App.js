import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on page load
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Navigate to home page after logging in
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  return (
    <div className="App">
      <Navbar isLoggedInd={isLoggedIn} onLogin={handleLogin} />
      <div className="content">
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
      {isLoggedIn && <div className="footer"><Footer isAuthenticated={isLoggedIn} /></div>}
    </div>
  );
}

export default App;
