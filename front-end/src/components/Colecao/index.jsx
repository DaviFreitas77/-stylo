import React from "react";

import { useState, useEffect } from "react";
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

 

    const pegarId = (item) =>{
        console.log(item)
    

        loadScreenCategoria(item.id_categoria)

    }

    const loadScreenCategoria = (id) => {
        fetch(`http://127.0.0.1:8000/api/produtosMasculino?id_categoria=${id}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="container-colecao">

            {categoria.map((item, index) => (
                <button
                onClick={()=>pegarId(item)}
                key={index} className="btnColecao">
                    <img className="img-colecao " src={item.imagem_categoria} alt={item.nome_categoria} />

                </button>
            ))}
        </div>


    )
}