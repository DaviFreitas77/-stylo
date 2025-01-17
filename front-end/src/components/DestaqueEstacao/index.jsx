import React, { useEffect, useState } from "react";
import './style.css'

import { useNavigate } from "react-router-dom";

export default function DestaqueEstacao() {
    const navigate = useNavigate();
    const [produto,setProduto] = useState([])

    useEffect(()=>{
        const getProduto = async()=>{
            try{
                const response = await fetch('http://127.0.0.1:8000/api/destaqueEstacao',{
                    method:'GET',
                });

                const data = await response.json()
                setProduto(data)
                
            }catch(error){
                console.log(error)
            }
        }
        getProduto()
    },[])

    return (
        <div className="container-destaque-estacao">
            <img className="banner-estação" src="/img/inverno.png" alt="" />
            <h2 className="titulo-destaque-estacao">Destaque da estação</h2>

            <section className="destaque-estacao">
            <div className="container-cards">
            {produto.map((item, index) => {
                        return (
                            <button
                            onClick={() => {
                                navigate('/produto', { state: { item } });
                            }}
                            key={index}
                                className="card-estacao">
                                <div >
                                    <img className="img-card-estacao" src={item.imagem_produto} alt="" />
                                </div>
                                <p className="nome-card">{item.nome_produto}</p>
                                <p className="preco-card">{item.preco_produto}</p>
                            </button>
                        )
                    })}
                </div>
          
            </section>
            

        </div>
    )
}