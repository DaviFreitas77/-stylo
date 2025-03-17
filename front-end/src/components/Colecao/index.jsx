import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/LoadingAnimation";
import { useQuery } from "@tanstack/react-query";
import './style.css';
import { Context } from "../../Contexto/provider";
import ContentLoader from "react-content-loader";

const fetchCategorias = async (url) => {
    const response = await fetch(`${url}/getCategorias`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar categorias");
    }

    return response.json();
};

export default function Colecao() {
    const { url } = useContext(Context);
    const { data: categoria, isLoading, isError, error } = useQuery({
        queryKey: ["categorias"],
        queryFn: () => fetchCategorias(url),
    });

    if (isLoading) {

        return (
            <div className="d-flex">
                {Array.from({ length: 2 }).map((_, index) => (
                        <ContentLoader
                        key={index}
                            speed={3}
                            width="50%" 
                            height={300} 
                            backgroundColor="gray"
                            foregroundColor="black"
                        >
                            <rect x="1" y="1" rx="0" ry="0" width="100%" height="50%" />
                        </ContentLoader>
                   
                ))}
            </div>
        );
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
    );
}
