import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css'
export default function Colecao() {
    const [categoria, setCategoria] = useState([]);
    const [idCategoria, setIdCategoria] = useState('')

    useEffect(() => {
        const fetchCategoria = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/getCategorias", {
                    method: "GET",
                });
                const data = await response.json();
                setCategoria(data);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };
        fetchCategoria();
    }, []);




    return (
        <div className="container-colecao">

            {categoria.map((item, index) => (
                <Link
                    to= {`/produtos-categoria/${item.id_categoria}`}
                    key={index} className="btnColecao">
                    <img className="img-colecao " src={item.imagem_categoria} alt={item.nome_categoria} />

                </Link>




            ))}
        </div>


    )
}