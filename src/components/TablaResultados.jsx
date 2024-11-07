// src/components/TablaResultados.jsx
import React from 'react';

function TablaResultados({ quotations = [] }) {
  return (
    <div className="container mt-4">
      <h3>Resultados de Cotización</h3>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tipo de Préstamo</th>
            <th scope="col">Monto del Préstamo</th>
          </tr>
        </thead>
        <tbody>
          {quotations.length > 0 ? (
            quotations.map((quotation, index) => (
              <tr key={quotation.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{quotation.type}</td>
                <td>${quotation.amount.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No hay cotizaciones disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablaResultados;
