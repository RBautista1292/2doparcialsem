// src/components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CSS/LoginCSS.css';

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('usuario', usuario);
    data.append('contrasena', contrasena);

    const config = {
      method: 'post',
      url: 'http://25.57.211.155:5000/iniciarSesion/',
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.data && response.data.data) {
        onLogin(response.data.data.usuario); // Usa el nombre de usuario que recibes como parámetro
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus datos e intenta nuevamente.');
      console.error('Error en la solicitud de inicio de sesión:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Iniciar Sesión</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        <Link to="/register" className="register-link">
          ¿No tienes una cuenta? Regístrate aquí
        </Link>
      </div>
    </div>
  );
}

export default Login;
