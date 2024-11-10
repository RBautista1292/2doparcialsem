import React, { useState } from 'react';
import axios from 'axios';
import './CSS/CotizacionForm.css';

function CotizacionForm() {
  const [formType, setFormType] = useState('Total');
  const [formData, setFormData] = useState({
    prestamo: '',
    sueldo_mensual: '',
    anios: '',
    prestamista: 'HSBC',
    nombre: '',
  });
  const [quoteResult, setQuoteResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setFormData({
      prestamo: '',
      sueldo_mensual: '',
      anios: '',
      prestamista: 'HSBC',
      nombre: '',
    });
    setQuoteResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      formType === 'Total'
        ? 'http://25.57.211.155:5000/crearCotizacion/'
        : 'http://25.57.211.155:5000/crearCotizacion/';
    const data =
      formType === 'Total'
        ? {
            tipo_prestamo: 'Total',
            prestamo: formData.prestamo,
            anios: formData.anios,
            prestamista: formData.prestamista,
            nombre: formData.nombre,
          }
        : {
            tipo_prestamo: 'Sueldo',
            sueldo_mensual: formData.sueldo_mensual,
            anios: formData.anios,
            prestamista: formData.prestamista,
            nombre: formData.nombre,
          };

    try {
      const response = await axios.post(url, data);
      setQuoteResult(response.data.data);
    } catch (error) {
      console.error('Error al crear la cotización:', error);
      alert('Hubo un error al crear la cotización. Intente nuevamente.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-switch">
        <button
          onClick={() => handleFormTypeChange('Total')}
          className={formType === 'Total' ? 'active' : ''}
        >
          Cotización Total
        </button>
        <button
          onClick={() => handleFormTypeChange('Sueldo')}
          className={formType === 'Sueldo' ? 'active' : ''}
        >
          Cotización por Sueldo
        </button>
      </div>
      <h2>Cotización {formType}</h2>
      <form onSubmit={handleSubmit}>
        {formType === 'Total' ? (
          <input
            type="number"
            name="prestamo"
            value={formData.prestamo}
            onChange={handleChange}
            placeholder="Prestamo Total"
            required
          />
        ) : (
          <input
            type="number"
            name="sueldo_mensual"
            value={formData.sueldo_mensual}
            onChange={handleChange}
            placeholder="Sueldo Mensual"
            required
          />
        )}
        <input
          type="number"
          name="anios"
          value={formData.anios}
          onChange={handleChange}
          placeholder="Años"
          required
        />
        <label htmlFor="prestamista">Prestamista:</label>
        <select
          name="prestamista"
          id="prestamista"
          value={formData.prestamista}
          onChange={handleChange}
          required
        >
          <option value="HSBC">HSBC</option>
          <option value="BBVA">BBVA</option>
          <option value="Infonavit">Infonavit</option>
        </select>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <button type="submit">Crear Cotización {formType}</button>
      </form>

      {quoteResult && (
        <div className="quote-result">
          <h3>Resultado de la Cotización</h3>
          <p>Interés Mensual: {quoteResult.interes_mensual}</p>
          <p>Mensualidad: {quoteResult.mensualidad}</p>
          <p>Total a Pagar: {quoteResult.total_a_pagar}</p>
          <button onClick={() => alert('Cotización guardada exitosamente')}>
            Guardar Cotización
          </button>
        </div>
      )}
    </div>
  );
}

export default CotizacionForm;
