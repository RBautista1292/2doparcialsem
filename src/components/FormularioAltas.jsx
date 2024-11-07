import React from 'react'

export default function FormularioAltas() {
    return (
        <div className="container mt-4">
          <h3>Alta de Cliente</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="rfc" className="form-label">RFC</label>
              <input type="text" className="form-control" id="rfc" name="rfc" />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Edad</label>
              <input type="number" className="form-control" id="age" name="age" />
            </div>
            <div className="mb-3">
              <label htmlFor="registrationDate" className="form-label">Fecha de Alta</label>
              <input type="date" className="form-control" id="registrationDate" name="registrationDate" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Teléfono</label>
              <input type="tel" className="form-control" id="phone" name="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <button type="submit" className="btn btn-primary">Agregar Cliente</button>
          </form>
        </div>
      );
}
