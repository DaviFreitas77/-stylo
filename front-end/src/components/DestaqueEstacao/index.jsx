import React from "react";
import './style.css'

import { useNavigate } from "react-router-dom";

export default function DestaqueEstacao() {
    const navigate = useNavigate();
    return (
        <div className="container-destaque-estacao">
            <img className="banner-estação" src="/img/inverno.png" alt="" />
            <h2 className="titulo-destaque-estacao">Destaque da estação</h2>

            <section className="destaque-estacao">
                <div className="container-cards">
                    <button 
                    onClick={()=>navigate('/produto')}
                    className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiçaa</p>
                         <p className="preco-card">R$ 99,99</p>
                    </button>
                    <div className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiça</p>
                         <p className="preco-card">R$ 99,99</p>
                    </div>
                    <div className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiça</p>
                         <p className="preco-card">R$ 99,99</p>
                    </div>
                    <div className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiça</p>
                         <p className="preco-card">R$ 99,99</p>
                    </div>
                    <div className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiça</p>
                         <p className="preco-card">R$ 99,99</p>
                    </div>
                    <div className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiça</p>
                         <p className="preco-card">R$ 99,99</p>
                    </div>
                    <div className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiça</p>
                         <p className="preco-card">R$ 99,99</p>
                    </div>
                    <div className="card-estacao">
                        <div>
                            <img className="img-card-estacao" src="/img/modelo.png" alt="" />
                         </div>
                         <p className="nome-card">Jaqueta suiça</p>
                         <p className="preco-card">R$ 99,99</p>
                    </div>
                </div>
          
            </section>
            

        </div>
    )
}