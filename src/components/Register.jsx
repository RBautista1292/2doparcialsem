import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/CSS/RegisterCSS.css';

function Register() {
  const [client, setClient] = useState({
    fullName: '',
    rfc: '',
    age: '',
    registrationDate: '',
    phone: '',
    email: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", client);

    // Muestra una alerta de confirmación y redirige
    alert("Usuario registrado exitosamente");
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h3 className="register-title">Registro de Cliente</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control form-control-sm" id="fullName" name="fullName" value={client.fullName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="rfc" className="form-label">RFC</label>
            <input type="text" className="form-control form-control-sm" id="rfc" name="rfc" value={client.rfc} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Edad</label>
            <input type="number" className="form-control form-control-sm" id="age" name="age" value={client.age} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="registrationDate" className="form-label">Fecha de Alta</label>
            <input type="date" className="form-control form-control-sm" id="registrationDate" name="registrationDate" value={client.registrationDate} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input type="tel" className="form-control form-control-sm" id="phone" name="phone" value={client.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control form-control-sm" id="email" name="email" value={client.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nombre de Usuario</label>
            <input type="text" className="form-control form-control-sm" id="username" name="username" value={client.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control form-control-sm" id="password" name="password" value={client.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="register-button">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
