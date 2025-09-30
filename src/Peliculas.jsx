import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'

export default function Peliculas() {
    const { peliculas } = useOutletContext(); // Recibo el outlet de inicio y lo hago una constante para filtrarlo
    const todasLasPeliculas = peliculas;
    
    //simplemente muestro todas las peliculas
    return (
        <div>
            <h2>Todas las Peliculas</h2>
            <ul>
                {todasLasPeliculas.map(pelicula => (
                    <li key={pelicula.id}>
                        <Link to={`/peliculas/${pelicula.id}`}>{pelicula.titulo}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
