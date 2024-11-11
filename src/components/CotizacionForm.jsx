// src/components/CotizacionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './CSS/CotizacionForm.css';

function CotizacionForm() {
  const [prestamoData, setPrestamoData] = useState({
    tipo_prestamo: '',
    prestamo: '',
    sueldo_mensual: '',
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
        if (response.data && response.data.data) {
          setCotizacion(response.data.data); // Guarda la cotización generada
          alert('Cotización creada exitosamente');
        } else {
          alert('La respuesta no contiene datos de cotización. Verifique el servidor.');
        }
      })
      .catch((error) => {
        console.error('Error al crear cotización:', error.response ? error.response.data : error);
        alert('Hubo un error al crear la cotización. Intente nuevamente.');
      });
  };

  const guardarCotizacion = () => {
    if (cotizacion && cotizacion.id_prestamista) {  // Asegúrate de que el ID correcto esté presente
      axios.post(`http://25.57.211.155:5000/guardarCotizacion/${cotizacion.id_prestamista}/`, cotizacion)
        .then((response) => {
          alert(response.data.response); // Mostrar mensaje de éxito
        })
        .catch((error) => {
          console.error('Error al guardar cotización:', error.response ? error.response.data : error);
          alert('Hubo un error al guardar la cotización. Intente nuevamente.');
        });
    } else {
      alert('Primero cree una cotización antes de guardarla.');
    }
  };

  return (
    <div className="cotizacion-container">
      <h2>{prestamoData.tipo_prestamo === 'Sueldo' ? 'Cotización por Sueldo' : 'Cotización Total'}</h2>
      
      <label>Tipo de Préstamo</label>
      <select name="tipo_prestamo" value={prestamoData.tipo_prestamo} onChange={handleChange}>
        <option value="">Seleccione...</option>
        <option value="Total">Total</option>
        <option value="Sueldo">Sueldo</option>
      </select>

      {prestamoData.tipo_prestamo === 'Sueldo' ? (
        <>
          <label>Sueldo Mensual</label>
          <input
            type="text"
            name="sueldo_mensual"
            placeholder="Sueldo Mensual"
            value={prestamoData.sueldo_mensual}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <label>Prestamo Total</label>
          <input
            type="text"
            name="prestamo"
            placeholder="Prestamo Total"
            value={prestamoData.prestamo}
            onChange={handleChange}
          />
        </>
      )}

      <label>Prestamista</label>
      <select name="prestamista" value={prestamoData.prestamista} onChange={handleChange}>
        <option value="">Seleccione...</option>
        <option value="HSBC">HSBC</option>
        <option value="BBVA">BBVA</option>
        <option value="Infonavit">Infonavit</option>
      </select>

      <label>Años</label>
      <select name="anios" value={prestamoData.anios} onChange={handleChange} disabled={!prestamoData.prestamista}>
        <option value="">Seleccione...</option>
        {prestamoData.prestamista === 'HSBC' && [10, 15, 20].map((year) => <option key={year} value={year}>{year}</option>)}
        {prestamoData.prestamista === 'BBVA' && [10, 15].map((year) => <option key={year} value={year}>{year}</option>)}
        {prestamoData.prestamista === 'Infonavit' && [10, 20].map((year) => <option key={year} value={year}>{year}</option>)}
      </select>

      <label>Nombre</label>
      <input type="text" name="nombre" placeholder="Nombre" value={prestamoData.nombre} onChange={handleChange} />

      <button onClick={crearCotizacion}>Crear Cotización</button>

      {/* Mostrar el botón Guardar Cotización solo si ya se creó una cotización */}
      {cotizacion && (
        <>
          <div className="cotizacion-result">
            <h3>Resultado de la Cotización:</h3>
            <p><strong>Interés Mensual:</strong> {cotizacion.interes_mensual}</p>
            <p><strong>Mensualidad:</strong> {cotizacion.mensualidad}</p>
            <p><strong>Total a Pagar:</strong> {cotizacion.total_a_pagar}</p>
          </div>
          <button onClick={guardarCotizacion} className="guardar-button">
            Guardar Cotización
          </button>
        </>
      )}
    </div>
  );
}

export default CotizacionForm;
