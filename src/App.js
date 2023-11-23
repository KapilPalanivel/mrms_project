import './App.css';
import Navbar from './Components/Navigation_Bar/navbar';
import { useEffect,useState } from 'react';
import Login from './Components/Login_Register/login';
import LoginPage from './Components/Login_Register/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
