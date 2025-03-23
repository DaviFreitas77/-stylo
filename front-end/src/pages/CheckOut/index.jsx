import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ModalScreen from '../../components/Modal';
import payment from '../../assets/lottie/payment.json'
import Header from '../../components/Header';


import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";


export default function Checkout() {
    const [nome, setNome] = useState();
    const produtos = useSelector(state => state.carrinho);
    const [payLoading, setPayLoading] = useState(false)

    //modal
    const [isOpen, setIsOpen] = useState(false)

    const calcularTotal = () => {
        return produtos.reduce((total, produto) => total + (produto.preco_produto * produto.quantidade), 0).toLocaleString("pt-BR",{
            style:"currency",
            currency:"BRL"
        });
    }
    const stripe = useStripe();
    const elements = useElements();


    const pay = async () => {
        setPayLoading(true)
        if (!stripe || !elements) {
            return;
        }


        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            alert('Por favor, preencha os dados do cartão');
            setPayLoading(false)
            return;
        }

        // Criar o token com o CardElement
        const { token, error } = await stripe.createToken(cardElement);


        if (error) {
            console.error(error);
            alert('Erro ao criar o token: ' + error.message);
            setPayLoading(false)
            return;
        }


        const total = calcularTotal();

        const response = await fetch('http://127.0.0.1:8000/api/pagamento', {
            method: 'POST',
            body: JSON.stringify({ token: token.id, valor: total * 100 }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        if (data.status === 'succeeded') {
            setIsOpen(true)
            setPayLoading(false)

        }
        console.log(data);
    };

    //modal
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: payment
    }
    return (

        <div>
            <Header />
            <div className="containerCheckOut">
                <div className="containerProdutoCheckOut">
                    <div className="produto">
                        {produtos.map((produto, index) => (
                            <div className="containerProduto" key={index}>
                                <div className="produtoCheck">
                                    <img className="imgCheckOutProduto" src={produto.imagem_produto} alt="" />
                                    <div className="infoProdutoCheck">
                                        <p className="nomeCheckOut">{produto.nome_produto}</p>
                                        <p>vendido por STYLO</p>
                                        <p>tamanho: {produto.desc_tamanho}</p>
                                        <p>cor: {produto.desc_cor}</p>
                                        <p>quantidade: {produto.quantidade}</p>
                                        <span className="last-price">R$ 290,00</span>
                                        <span className="price-carrinho">{Number(produto.preco_produto).toLocaleString("pt-BR",{
                                            style:'currency',
                                            currency:"BRL"
                                        })}</span>
                                    </div>
                                </div>
                                <div className="linha"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <section className="containerPagamento">
                    <h2>Pagamento</h2>
                    <div className="containerTotalChecl">
                        <CardElement />
                        <h2 className="h2CheckOut">Resumo da compra</h2>
                        <div className="totalCheck">
                            Total: ({produtos.length} itens)
                            <h3>{calcularTotal()}</h3>
                        </div>
                        {payLoading ? (
                            <button onClick={pay} className="botao" disabled>
                                <Dots />
                            </button>
                        ) : (
                            <button onClick={pay} className="botao">
                                Finalizar
                            </button>
                        )}
                    </div>
                </section>
                <ModalScreen
                    titulo='Pagamento concluido'
                    txtButton="Acompanhe seus pedidos"
                    options={defaultOptions}
                    openModal={true}
                    modalOpen={isOpen}
                    setModalOpen={setIsOpen}
                />

            </div>
        </div>

    );
}
