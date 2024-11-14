// src/components/Formulario.js
import React, { useState } from 'react';
import './Formulario.css';  // Importamos el archivo de estilos

function Formulario({ onEnviarDatos }) {
  const [nombre, setNombre] = useState('');

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim() !== '') {
      onEnviarDatos(nombre);
      setNombre('');
    }
  };

  return (
    <form className="formulario-container" onSubmit={manejarEnvio}>
      <input 
        type="text" 
        value={nombre} 
        onChange={manejarCambio} 
        className="input-nombre"
        placeholder="Escribe tu nombre"
      />
      <button type="submit" className="btn-enviar">Enviar</button>
    </form>
  );
}

export default Formulario;
