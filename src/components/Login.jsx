import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/CSS/LoginCSS.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    // Redirige a la página de cotizar préstamo después de iniciar sesión
    navigate('/cotizar-prestamo');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="login-title">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nombre de Usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <Link to="/register" className="register-link">
          ¿No tienes cuenta? Regístrate aquí
        </Link>
      </div>
    </div>
  );
}

export default Login;
