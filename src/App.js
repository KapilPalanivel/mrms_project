import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Components/Login_Register/login';
import Navbar from './Components/Navigation_Bar/navbar';
import HomePage from './Components/Home/home';
import PatientList from './Components/Services/PatientList';
import PatientForm from './Components/Services/PatientForm';
import PatientSearch from './Components/Patient Search Component/PatientSearch';
import Appointments from './Components/Appointment Component/Appointments';
import Profile from './Components/Services/Profile';
import Footer from './Components/Services/Footer';
import Records from './Components/Services/Records';
import AboutUs from './Components/Services/About';
import DepartmentsPage from './Components/Services/Departments';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on page load
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
    
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      window.location.href = 'http://localhost:3000';
    }
  }, []);
  

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    navigate('/home');
  };

  return (
    <div className="App">
      <Navbar isLoggedInd={isLoggedIn} onLogin={handleLogin} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/department" element={<DepartmentsPage />} />
          <Route path="/patientlist" element={<PatientList />} />
          <Route path="/patientform" element={<PatientForm />} />
          <Route path="/PatientSearch" element={<PatientSearch />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/records" element={<Records />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
