import React, { useContext, useEffect, useState } from "react";
import './style.css';
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { CiBookmarkRemove } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Context } from "../../Contexto/provider";
import { useNavigate } from "react-router-dom";
import { decrementCarrinho, incrementCarrinhho } from "../../store/modules/carrinho/actions";
export default function DrawerCarrinho() {
    const dispatch = useDispatch();
    const produtos = useSelector(state => state.carrinho)
    const { idCarrinho, nomeUsuario } = useContext(Context)
    const nome = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id_usuario");
    const navigation = useNavigate()

    //actions
    const increment = async (item) => {
        dispatch(incrementCarrinhho(idCarrinho, item, idUsuario))
    }

    const handleDelete = async (item) => {

        dispatch({
            type: 'EXCLUIR',
            item: {
                ...item
            }
        })
        fetch(`http://127.0.0.1:8000/api/deleteProdutoCarrinho/${item.id_produto}/${idCarrinho}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Produto removido:', data);
            })
            .catch(error => {
                console.error('Erro ao remover produto:', error);
            });
    }

    const decrement = async (item) => {
        dispatch(decrementCarrinho(item, idCarrinho))
    }

    useEffect(() => {
        const fetchCarrinho = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/carrinho?id_usuario=${idUsuario}`, {
                    method: 'GET'
                })
                const data = await response.json();

                console.log(data.itens)
                dispatch({
                    type: 'LOAD_CARRINHO',
                    payload: data.itens
                });
            } catch (error) {
                console.log(error)
            }
        }
        fetchCarrinho()
    }, [idUsuario])



    return (
        <div>
            <div className="iconsMobile">
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <HiMiniShoppingCart className="icon " size={30} />
                </button>
                {nome ? (

                    <span className="quantidade-carrinho">{produtos.length}</span>

                ) : (

                    <span className="quantidade-carrinho">{produtos.length}</span>
                )}

            </div>


            <div className="offcanvas  offcanvas-end offcanvas-custom" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Meu carrinho</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <section className="section-carrinho">
                    {produtos.map((produtos, index) => (
                        <div
                            className="card-produto-carrinho"
                            key={index}>
                            <img className="image_carrinho" src={produtos.imagem_produto} alt="" />
                            <div className="nome_produto_and_remove">
                                <div className="container-quantidade">
                                    <div>
                                        <p>{produtos.nome_produto}</p>
                                        {produtos.desc_cor ? (
                                            <p>{produtos.desc_tamanho}/{produtos.desc_cor}</p>
                                        ) : (
                                            <p>{produtos.tamanho}/{produtos.cor}</p>
                                        )}

                                    </div>
                                    <div className="container-quantidade-buttons">
                                        <button onClick={() => decrement(produtos)}>
                                            <IoAddCircleOutline size={22} />
                                        </button>
                                        <p>{produtos.quantidade}</p>
                                        <button onClick={() => increment(produtos)}>
                                            <IoAddCircleOutline size={22} />
                                        </button>
                                    </div>
                                </div>
                                <div className="btn_remove_and_preco">
                                    <button onClick={() => handleDelete(produtos)}>
                                        <CiBookmarkRemove size={30} />
                                    </button>
                                    <div className="container-precos">
                                        <span className="last-price">
                                            R$ {produtos.preco_produto}
                                        </span>
                                        <span className="price-carrinho">
                                            R$ {produtos.preco_produto}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="containerBtnCheckOut">
                        {produtos.length > 0 ? (
                            <p className="totalCarrinho ">
                                Total: R$
                                {produtos.reduce((total, produto) => {
                                    return total + (produto.preco_produto * produto.quantidade);
                                }, 0).toFixed(2)}
                                <button
                                    className="botao  " data-bs-dismiss="offcanvas" aria-label="Close "
                                    onClick={() => navigation('/checkOut')}>
                                    Finalizar Compra
                                </button>
                            </p>
                        ) : (
                            <p>Não a itens no carrinho</p>
                        )}



                    </div>


                </section>

            </div>
        </div>
    );
}
