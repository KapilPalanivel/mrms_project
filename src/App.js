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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './Components/Login_Register/login';
// import Navbar from './Components/Navigation_Bar/navbar';
// import HomePage from './Components/Home/home';
// import kmchBackground from './kmch.jpg';
// import PatientList from './Components/Services/PatientList';
// import PatientForm from './Components/Services/PatientForm';
// import PatientSearch from './Components/Services/Patientsearch';
// import Appointments from './Components/Services/Appointments';
// import Profile from './Components/Services/Profile';
// import Footer from './Components/Services/Footer';
// function App() {
//   const [isLoggedInd, setIsLoggedInd] = useState(false);

//   const handleLogin = () => {
//     // You can set the login state here based on your authentication logic
//     setIsLoggedInd(true);
//   };

//   return (
//       <div className="App" style={{ backgroundImage: `url(${kmchBackground})` }}>
//         <Navbar isLoggedInd={isLoggedInd} onLogin={handleLogin}/>
//         <Routes>
//           <Route
//             path="/"
//             element={<Login onLogin={handleLogin} />}
//           />
//           <Route
//             path="/home"
//             element={<HomePage />}
//           />
//           <Route
//             path="/patientlist"
//             element={<PatientList/>}
//           />
//           <Route
//             path="/patientform"
//             element={<PatientForm/>}
//           />
//           <Route
//             path="/patientsearch"
//             element={<PatientSearch/>}
//           />
//           <Route
//             path="/appointment"
//             element={<Appointments/>}
//           />
//           <Route
//             path="/profile"
//             element={<Profile/>}
//           />
//         </Routes>
//       <Footer/>
//       </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './Components/Navigation_Bar/navbar';
// import Login from './Components/Login_Register/login';
// import kmchBackground from './kmch.jpg';

// function App() {
//   const [isLoggedInd, setIsLoggedInd] = useState(false);

//   const handleLogin = () => {
//     // You can set the login state here based on your authentication logic
//     setIsLoggedInd(true);
//   };

//   return (
//     <div className="App" style={{ backgroundImage: `url(${kmchBackground})` }}>
//       <Navbar isLoggedInd={isLoggedInd} onLogin={handleLogin} />
//     </div>
//   );
// }
// export default App;
