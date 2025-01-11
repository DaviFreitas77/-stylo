import React from "react";
import './style.css'
import Header from '../../components/Header'
import Botao from '../../components/Botao'
import { FaCircle } from "react-icons/fa";

export default function Produto() {
    return (
        <div className="container-produto">
            <Header />
            <section className="section-info-produto">
                <img className="img-produto" src="/img/modelo.jpg" alt="" />

                <div className="details-produto">
                    <h2 className="nome-produto">Jaqueta suiça</h2>
                    <p className="preco-produto">R$ 99,99</p>
                    <div className="container-cores">
                        <h3 className="subtitulo">Cores</h3>
                        <div className="container-icons-cores">
                            <FaCircle color="black" size={30} />
                            <FaCircle color="black" size={30} />
                            <FaCircle color="black" size={30} />
                            <FaCircle color="black" size={30} />
                        </div>
                    </div>
                    <div className="container-tamanho">
                        <h4 className="subtitulo">Tamanho</h4>
                        <select className="input-select" name="" id="">
                            <option value="" disabled>
                                Selecione um tamanho
                            </option>
                            <option value="opcao1">M</option>
                            <option value="opcao2">G</option>
                            <option value="opcao3">GG</option>
                        </select>

                    </div>
                    <Botao
                    text='Adicionar ao carrinho'
                    />
                </div>
            </section>
        </div>
    )
}