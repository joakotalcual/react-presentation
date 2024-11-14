// src/components/EstiloDinámico.js
import React, { useState } from 'react';
import './EstiloDinamico.css';  // Importamos el archivo de estilos

function EstiloDinámico({ colorInicial }) {
  const [colorFondo, setColorFondo] = useState(colorInicial);

  const cambiarColor = () => {
    const nuevosColores = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'];
    const nuevoColor = nuevosColores[Math.floor(Math.random() * nuevosColores.length)];
    setColorFondo(nuevoColor);
  };

  return (
    <div className="estilo-container" style={{ backgroundColor: colorFondo }}>
      <h1 className="estilo-title">Fondo de color dinámico</h1>
      <button className="btn-cambiar-color" onClick={cambiarColor}>Cambiar color de fondo</button>
    </div>
  );
}

export default EstiloDinámico;
