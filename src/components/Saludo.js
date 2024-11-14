// src/components/Saludo.js
import React from 'react';

function Saludo({ nombre }) {
    return <h1>Hola, {nombre}!</h1>;
}

export default Saludo;

/*import React from 'react';

function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

export default Saludo;
La mayoría de los proyectos modernos permiten usar la extensión .js
incluso si hay JSX en el archivo, ya que las herramientas
de construcción como Babel pueden manejar la conversión del JSX
automáticamente.*/