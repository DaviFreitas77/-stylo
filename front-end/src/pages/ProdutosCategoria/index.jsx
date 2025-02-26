import React, { useState } from "react";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TbShoppingCartUp } from "react-icons/tb";
import './style.css'
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/LoadingAnimation";
export default function ProdutosCategoria() {

    const { id_categoria } = useParams();
    const [produtos, setProdutos] = useState([])

    console.log(id_categoria)

    useEffect(() => {
        const loadScreenCategoria = () => {
            fetch(`http://127.0.0.1:8000/api/produtosMasculino?id_categoria=${id_categoria}`, {
                method: "GET"
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setProdutos(data)
                })
                .catch(error => {
                    console.log(error);
                });
        };

        loadScreenCategoria();
    }, [])



    return (
        <div className="container-produtos-categoria">
            <p>Masculino</p>
            <div className="produtos-categoria">

                {produtos.length > 0 ? (
                    
                        produtos.map((item, index) => (
                            <Link
                                to={`/produto/${item.id_produto}`}
                                key={index} className="container-produto-categoria">
                                <div className="div-imagem-produto-categoria">
                                    <img
                                        className="imagem-produto-categoria"
                                        src={item.imagem_produto} alt="" />
                                </div>
                                <p className="nome-produto-categoria">{item.nome_produto}</p>
                                <div className="div-preco-categoria">
                                    <div className="prices-categoria">
                                        <p className="last-price-categoria">{item.preco_antigo_produto}</p>
                                        <p className="price-produto-categoria ">{item.preco_produto}</p>
                                    </div>

                                    <buttton className="add-carrinho-card-categoria">
                                        <  TbShoppingCartUp className="icon-carrinh-categoria"  />
                                    </buttton>
                                </div>

                            </Link>
                        ))
                    
                ):(
                    <Loading/>
                )}


            </div>

        </div>
    )
}