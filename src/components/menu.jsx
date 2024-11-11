// src/components/Menu.js
import logo from '../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ loggedInUser, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={logo} alt="" width={50} height={50} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cotizar-prestamo">Cotizar Préstamo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cotizacion">Cotización</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ver-cotizaciones">Ver cotizaciones</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {loggedInUser ? (
              <>
                <span className="navbar-text me-3">Bienvenido, {loggedInUser}</span>
                <button onClick={onLogout} className="btn btn-outline-light">Cerrar Sesión</button>
              </>
            ) : (
              <Link className="btn btn-outline-success" to="/login">Iniciar Sesión</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
