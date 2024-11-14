// src/components/ListaDeTareas.js
import React, { useState } from 'react';
import './ListaDeTareas.css';  // Importamos el archivo de estilos

function ListaDeTareas({ tareasIniciales }) {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  return (
    <div className="lista-container">
      <h2>Lista de Tareas</h2>
      <ul className="lista-tareas">
        {tareas.map((tarea, index) => (
          <li key={index} className="tarea-item">{tarea}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        className="input-tarea"
        placeholder="Nueva tarea"
      />
      <button className="btn-agregar" onClick={agregarTarea}>Agregar tarea</button>
    </div>
  );
}

export default ListaDeTareas;
