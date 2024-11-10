import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/VerCotizacionesCSS.css'

function VerCotizaciones() {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    // Cambia la URL por la correcta según tu backend
    axios.get('http://25.57.211.155:5000/verCotizaciones/1/')
      .then((response) => {
        setCotizaciones(response.data.data);
      })
      .catch((error) => {
        console.error('Error al obtener las cotizaciones:', error);
      });
  }, []);

  return (
    <div className="cotizaciones-container">
      <h2>Listado de Cotizaciones</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Cotización</th>
            <th>Interés Mensual</th>
            <th>Mensualidad</th>
            <th>Meses a Pagar</th>
            <th>Nombre Préstamo</th>
            <th>Prestamista</th>
            <th>Tipo de Préstamo</th>
            <th>Total a Pagar</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion) => (
            <tr key={cotizacion.id_cotizacion}>
              <td>{cotizacion.id_cotizacion}</td>
              <td>{cotizacion.interes_mensual}</td>
              <td>{cotizacion.mensualidad}</td>
              <td>{cotizacion.meses_a_pagar}</td>
              <td>{cotizacion.nombre_prestamo}</td>
              <td>{cotizacion.prestamista}</td>
              <td>{cotizacion.tipo_prestamo}</td>
              <td>{cotizacion.total_a_pagar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerCotizaciones;
