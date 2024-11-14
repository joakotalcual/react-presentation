// src/components/Reloj.js
import React, { useState, useEffect } from 'react';

function Reloj() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
    const intervalo = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    return <h1>La hora actual es: {hora}</h1>;
}

export default Reloj;
