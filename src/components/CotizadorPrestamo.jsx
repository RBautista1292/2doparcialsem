import React, { useState } from 'react';
import TablaResultados from './TablaResultados';

function CotizadorPrestamo() {
  const [salary, setSalary] = useState('');
  const [houseValue, setHouseValue] = useState('');
  const [loanAmount, setLoanAmount] = useState(null);

  // Datos de ejemplo para la tabla de resultados
  const sampleQuotations = [
    { id: 1, type: 'Sueldo', amount: 50000 },
    { id: 2, type: 'Casa', amount: 80000 },
    { id: 3, type: 'Sueldo', amount: 30000 },
  ];

  const handleCalculateSalary = () => {
    const amount = salary * 0.4;
    setLoanAmount({ type: 'Sueldo', amount });
  };

  const handleCalculateHouseValue = () => {
    const amount = houseValue * 0.8;
    setLoanAmount({ type: 'Casa', amount });
  };

  return (
    <div className="container mt-4">
      <h3>Calculadora de Préstamo</h3>
      <div className="mb-3">
        <label htmlFor="salary" className="form-label">Sueldo</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Ingresa el sueldo"
        />
        <button className="btn btn-primary mt-2" onClick={handleCalculateSalary}>
          Calcular Préstamo por Sueldo (40%)
        </button>
      </div>
      
      <div className="mb-3">
        <label htmlFor="houseValue" className="form-label">Valor de la Casa</label>
        <input
          type="number"
          className="form-control"
          id="houseValue"
          value={houseValue}
          onChange={(e) => setHouseValue(e.target.value)}
          placeholder="Ingresa el valor de la casa"
        />
        <button className="btn btn-primary mt-2" onClick={handleCalculateHouseValue}>
          Calcular Préstamo por Casa (80%)
        </button>
      </div>

      {loanAmount && (
        <div className="mt-4">
          <h5>Resultado de Cotización</h5>
          <p><strong>Tipo de Préstamo:</strong> {loanAmount.type}</p>
          <p><strong>Monto del Préstamo:</strong> ${loanAmount.amount.toFixed(2)}</p>
        </div>
      )}

      {/* Muestra la tabla de resultados con datos de ejemplo */}
      <TablaResultados quotations={sampleQuotations || []} />

    </div>
  );
}

export default CotizadorPrestamo;
