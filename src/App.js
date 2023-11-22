import './App.css';
import Navbar from './Components/Navigation_Bar/navbar';
import { useEffect,useState } from 'react';
import Login from './Components/Login_Register/login';
import LoginPage from './Components/Login_Register/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route path="/" component={<Home} /> */}
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/dashboard" component={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;