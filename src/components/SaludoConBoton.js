// src/components/SaludoConBoton.js
import React, { useState } from 'react';
import './SaludoConBoton.css';

function SaludoConBoton({ nombre, mensajeInicial }) {
  const [mensaje, setMensaje] = useState(mensajeInicial);

  const cambiarMensaje = () => {
    setMensaje(`¡Hola ${nombre}! Bienvenido/a a la clase de React.`);
  };

  return (
    <div className="saludo-container">
      <h1 className="saludo-message">{mensaje}</h1>
      <button className="saludo-button" onClick={cambiarMensaje}>Cambiar saludo</button>
    </div>
  );
}

export default SaludoConBoton;
