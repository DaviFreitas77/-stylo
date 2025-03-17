import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/LoadingAnimation";
import { useQuery } from "@tanstack/react-query";
import './style.css'

const fetchCategorias = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/getCategorias", {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar categorias");
    }

    return response.json();
};


export default function Colecao() {
    const { data: categoria, isLoading, isError, error } = useQuery({
        queryKey: ["categorias"],
        queryFn: fetchCategorias,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div className="container-colecao">
            {categoria.length > 0 ? (
                categoria.map((item, index) => (
                    <Link
                        to={`/produtos-categoria/${item.id_categoria}`}
                        key={index}
                        className="btnColecao"
                    >
                        <img
                            className="img-colecao"
                            src={item.imagem_categoria}
                            alt={item.nome_categoria}
                        />
                    </Link>
                ))
            ) : (
                <p>Nenhuma categoria encontrada.</p>
            )}
        </div>


    )
}