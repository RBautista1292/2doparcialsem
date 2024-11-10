import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/RegisterCSS.css';

function Register() {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    apellido_paterno: '',
    apellido_materno: '',
    nombres: '',
    usuario: '',
    contrasena: '',
    rfc: '',
    edad: '',
    telefono: '',
    correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://25.57.211.155:5000/registrarUsuario', client);
      alert("Usuario registrado con éxito");
      navigate('/login'); // Redirige al login después del registro
    } catch (error) {
      alert("Hubo un error al registrar el usuario. Intente nuevamente.");
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h3 className="register-title">Registro de Cliente</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Apellido Paterno</label>
              <input type="text" name="apellido_paterno" value={client.apellido_paterno} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Apellido Materno</label>
              <input type="text" name="apellido_materno" value={client.apellido_materno} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Nombres</label>
              <input type="text" name="nombres" value={client.nombres} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Nombre de Usuario</label>
              <input type="text" name="usuario" value={client.usuario} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" name="contrasena" value={client.contrasena} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>RFC</label>
              <input type="text" name="rfc" value={client.rfc} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Edad</label>
              <input type="number" name="edad" value={client.edad} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="tel" name="telefono" value={client.telefono} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" name="correo" value={client.correo} onChange={handleChange} required />
          </div>
          <button type="submit" className="register-button">Registrarse</button>
        </form> 
      </div>
    </div>
  );
}

export default Register;
