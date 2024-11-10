import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/menu';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import CotizadorPrestamo from './components/CotizadorPrestamo';
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
        {/* Renderiza el menú solo si el usuario ha iniciado sesión */}
        {isLoggedIn && <Menu loggedInUser={loggedInUser} onLogout={handleLogout} />}
        
        <Routes>
          {/* Redirige a la página de login si no ha iniciado sesión */}
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          <Route
            path="/cotizar-prestamo"
            element={isLoggedIn ? <CotizadorPrestamo /> : <Navigate to="/login" />}
          />
          
          <Route
            path="/cotizacion"
            element={isLoggedIn ? <CotizacionForm /> : <Navigate to="/login" />}
          />
          
          {/* Agrega la ruta para VerCotizaciones */}
          <Route
            path="/ver-cotizaciones"
            element={isLoggedIn ? <VerCotizaciones /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
