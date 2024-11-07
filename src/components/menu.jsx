// src/components/menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alta-cliente">Alta de Cliente</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cotizar-prestamo">Cotizar Préstamo</Link>
              </li>
            </ul>
            <div>
                <button class="btn btn-outline-success" type="submit">Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
