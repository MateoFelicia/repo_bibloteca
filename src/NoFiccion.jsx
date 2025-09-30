import React from 'react'
import { useOutletContext, Link } from 'react-router-dom'

export default function NoFiccion() {
    const { libros } = useOutletContext(); // Recibo el outlet de inicio y lo hago una constante para filtrarlo
    const noFiccion = libros.filter(libro => libro.categoria === "No ficción");

    return (
        <section>
            <h2>Libros de no ficción</h2>
            <ul>
                {/* mostramos los libros de no ficción */}
                {noFiccion.map(libro => (
                    <li key={libro.id}>{libro.titulo}</li>
                ))}
            </ul>

            <p>
                <Link to="/libros/ficcion">Ver ficción</Link> | <Link to="/">Volver al inicio</Link>
                {/* Innecesario pero comodo */}
            </p>
        </section>
    )
}
