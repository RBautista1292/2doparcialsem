// src/components/CotizacionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './CSS/CotizacionForm.css';

function CotizacionForm() {
  const [prestamoData, setPrestamoData] = useState({
    tipo_prestamo: '',
    prestamo: '',
    anios: '',
    prestamista: '',
    nombre: ''
  });
  const [cotizacion, setCotizacion] = useState(null); // Estado para la cotización generada

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrestamoData({
      ...prestamoData,
      [name]: value
    });
  };

  const crearCotizacion = () => {
    axios.post('http://25.57.211.155:5000/crearCotizacion/', prestamoData)
      .then((response) => {
        setCotizacion(response.data.data); // Guardar la cotización generada en el estado
        alert('Cotización creada exitosamente');
      })
      .catch((error) => {
        console.error('Error al crear cotización:', error);
        alert('Hubo un error al crear la cotización. Intente nuevamente.');
      });
  };

  const guardarCotizacion = () => {
    if (cotizacion) {
      axios.post(`http://25.57.211.155:5000/guardarCotizacion/${cotizacion.id_cotizacion}`, cotizacion)
        .then((response) => {
          alert(response.data.response); // Mostrar mensaje de éxito
        })
        .catch((error) => {
          console.error('Error al guardar cotización:', error);
          alert('Hubo un error al guardar la cotización. Intente nuevamente.');
        });
    } else {
      alert('Primero cree una cotización antes de guardarla.');
    }
  };

  return (
    <div className="cotizacion-container">
      <h2>Cotización Total</h2>
      <input
        type="text"
        name="prestamo"
        placeholder="Prestamo Total"
        value={prestamoData.prestamo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="anios"
        placeholder="Años"
        value={prestamoData.anios}
        onChange={handleChange}
      />
      <input
        type="text"
        name="prestamista"
        placeholder="Prestamista"
        value={prestamoData.prestamista}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={prestamoData.nombre}
        onChange={handleChange}
      />
      <button onClick={crearCotizacion}>Crear Cotización</button>

      {/* Mostrar el botón Guardar Cotización solo si ya se creó una cotización */}
      {cotizacion && (
        <button onClick={guardarCotizacion} className="guardar-button">
          Guardar Cotización
        </button>
      )}
    </div>
  );
}

export default CotizacionForm;
