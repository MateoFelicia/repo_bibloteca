import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Categoria({ categoria }) {
    const { libros } = useOutletContext();

    // Filtramos en minúsculas
    const librosFiltrados = libros.filter(
        (libro) => libro.categoria.toLowerCase() === categoria.toLowerCase()
    );

    return (
        <div>
            <h1>Libros de {categoria}</h1>
            <ul>
                {librosFiltrados.map((libro) => (
                    <li key={libro.id}>{libro.titulo}</li>
                ))}
            </ul>
        </div>
    );
}