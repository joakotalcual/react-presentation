// src/components/Boton.js
import React from 'react';

function Boton() {
    const handleClick = () => {
    alert('¡Haz hecho clic!');
    };

    return <button onClick={handleClick}>Haz clic aquí</button>;
}

export default Boton;
