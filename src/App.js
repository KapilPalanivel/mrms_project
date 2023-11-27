import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navigation_Bar/navbar';
import Login from './Components/Login_Register/login';
import kmchBackground from './kmch.jpg';

function App() {
  const [isLoggedInd, setIsLoggedInd] = useState(false);

  const handleLogin = () => {
    // You can set the login state here based on your authentication logic
    setIsLoggedInd(true);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${kmchBackground})` }}>
      <Navbar isLoggedInd={isLoggedInd} onLogin={handleLogin} />
    </div>
  );
}
export default App;
