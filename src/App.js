// src/App.js
import React, { useState } from 'react';
import './App.css';
import SaludoConBoton from './components/SaludoConBoton';
import ListaDeTareas from './components/ListaDeTareas';
import EstiloDinamico from './components/EstiloDinamico';
import Formulario from './components/Formulario';

function App() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const tareasIniciales = ['Estudiar React', 'Hacer ejercicios', 'Leer documentación'];

  const manejarEnvioNombre = (nombre) => {
    setNombreUsuario(nombre);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">React App</h1>
      {/* Componente de Saludo con Botón */}
      <SaludoConBoton
        nombre={nombreUsuario}
        mensajeInicial="¡Bienvenido a React!" 
      />

      {/* Componente de Lista de Tareas */}
      <ListaDeTareas tareasIniciales={tareasIniciales} />

      {/* Componente con Estilo Dinámico */}
      <EstiloDinamico colorInicial="#FF5733" />

      {/* Componente de Formulario */}
      <Formulario onEnviarDatos={manejarEnvioNombre} />

    </div>
  );
}

export default App;
