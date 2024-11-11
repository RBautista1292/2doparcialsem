import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/VerCotizacionesCSS.css';

function VerCotizaciones() {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    axios.get(`http://25.57.211.155:5000/verCotizaciones/1`)
      .then(response => {
        setCotizaciones(response.data.data);
      })
      .catch(error => {
        console.error("Error al cargar las cotizaciones:", error);
      });
  }, []);

  return (
    <div className="cotizaciones-container">
      <h2 className="cotizaciones-title">Cotizaciones</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Prestamista</th>
            <th>Nombre</th>
            <th>Tipo Préstamo</th>
            <th>Total a Pagar</th>
            <th>Mensualidad</th>
            <th>Interés Mensual</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.id_cotizacion}</td>
              <td>{cotizacion.prestamista}</td>
              <td>{cotizacion.nombre_prestamo}</td>
              <td>{cotizacion.tipo_prestamo}</td>
              <td>{cotizacion.total_a_pagar}</td>
              <td>{cotizacion.mensualidad}</td>
              <td>{cotizacion.interes_mensual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerCotizaciones;
