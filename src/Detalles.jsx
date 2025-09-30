import React from 'react'
import { useOutletContext, useParams, Link } from 'react-router-dom'

export default function Detalles() {
    const { peliculas } = useOutletContext();
    const { id } = useParams();


    console.log("🚀 Entré en Detalles, id =", id, "peliculas =", peliculas);

    // Convertir id a número
    const peliEspecifica = peliculas.find(pelicula => pelicula.id === Number(id));

    if (!peliEspecifica) { //estetica
        return (
            <section>
                <h2>Película no encontrada</h2>
                <p><Link to="/peliculas/all">Volver a la lista</Link></p>
            </section>
        );
    }

    return (
        <section>
            <h2>{peliEspecifica.titulo}</h2>
            <p><strong>Director:</strong> {peliEspecifica.director}</p>
            <p><strong>Año:</strong> {peliEspecifica.año}</p>
            <p><strong>Descripción:</strong> {peliEspecifica.descripcion}</p>
{/* Detalles de la pelicula */}
            {/* <p>
                <Link to="/peliculas/all">Ver todas</Link> | <Link to="/">Inicio</Link>
            </p> */}
        </section>
    );
}
