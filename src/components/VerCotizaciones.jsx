// src/components/VerCotizaciones.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CSS/VerCotizacionesCSS.css';

function VerCotizaciones({ userId }) {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://25.57.211.155:5000/verCotizaciones/${userId}/`)
        .then((response) => {
          setCotizaciones(response.data.data);
        })
        .catch((error) => {
          console.error('Error al obtener las cotizaciones:', error);
        });
    }
  }, [userId]);

  return (
    <div>
      <h2>Cotizaciones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Interés Mensual</th>
            <th>Mensualidad</th>
            <th>Meses a Pagar</th>
            <th>Nombre Prestamo</th>
            <th>Prestamista</th>
            <th>Tipo Prestamo</th>
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
