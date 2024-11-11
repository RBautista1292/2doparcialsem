// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/menu';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import CotizacionForm from './components/CotizacionForm'; 
import VerCotizaciones from './components/VerCotizaciones';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Menu loggedInUser={loggedInUser} onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/cotizacion" element={isLoggedIn ? <CotizacionForm /> : <Navigate to="/login" />} />
          <Route path="/ver-cotizaciones" element={isLoggedIn ? <VerCotizaciones /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
