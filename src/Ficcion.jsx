import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'

export default function Ficcion() {
    const { libros } = useOutletContext(); // Recibo el outlet de inicio y lo hago una constante para filtrarlo
    const ficcion = libros.filter(libro => libro.categoria === "Ficción");

    return (
        <section>
            <h2>Libros de ficción</h2>
            <ul>
                {/* mostramos los libros de ficción */}
                {ficcion.map(libro => (
                    <li key={libro.id}>{libro.titulo}</li>
                ))}
            </ul>

            <p>
                <Link to="/libros/no-ficcion">Ver no ficción</Link> | <Link to="/">Volver al inicio</Link>
                {/* Innecesario pero comodo */}
            </p>
        </section>
    )
}
