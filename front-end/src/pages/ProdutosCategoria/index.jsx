import React, { useState } from "react";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TbShoppingCartUp } from "react-icons/tb";
import './style.css'
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/LoadingAnimation";
import Header from "../../components/Header";
export default function ProdutosCategoria() {

    const { id_categoria } = useParams();
    const [produtos, setProdutos] = useState([])
    const [subCategoria, setSubCategoria] = useState([])
    const [cor, setCor] = useState([])
    const [tamanho, setTamanho] = useState([])
    const [idCor, setIdCor] = useState('')
    const [idTamanho, setIdTamanho] = useState('')
    const [id_subCategoria, setIdSubCategoria] = useState('')
    const [produtoFiltrado, setProdutoFiltrado] = useState([])



    const pegarCategoria = (item) => {
        setIdSubCategoria(item)
    }

    const pegarCor = (item) => {

        setIdCor(item)
    }

    const pegarTamanho = item => {
        setIdTamanho(item)

    }


    const filtrarProduto = async () => {

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/filtro/${id_subCategoria}/${idCor}/${idTamanho}`, {
                method: 'GET'
            })
            const data = await response.json()
            setProdutoFiltrado(data)
            console.log(data)

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        const loadScreenCategoria = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/produtosCategoria?id_categoria=${id_categoria}`, {
                    method: "GET"
                });

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        };


        const loadCategoria = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/getsubCategoriaProduto/${id_categoria}`, {
                    method: "Get"
                })


                const data = await response.json();
                setSubCategoria(data)


            } catch (error) {
                console.log(error)
            }
        }


        const loadCor = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/getcor`, {
                    method: "GET"
                })

                const data = await response.json();
                setCor(data)

            } catch (error) {
                console.log(error)
            }
        }

        const loadTamanho = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/gettamanho`, {
                    method: "GET"
                })

                const data = await response.json();
                setTamanho(data)


            } catch (error) {
                console.log(error)
            }
        }
        loadCategoria()
        loadScreenCategoria();
        loadCor();
        loadTamanho();
    }, []);


    return (
        <div>
            <Header />
            <div className="container-categoria-produtos">
                <section className="container-filters">
                    <div className="filter-group">
                        <h2 className="subtitulo-filter">Categoria</h2>
                        <div className="filter-options">
                            {subCategoria.length > 0 && subCategoria.map((item, index) => (
                                <button
                                    onClick={() => pegarCategoria(item.id_subCategoria)}
                                    className={`btn-subCategoria ${id_subCategoria === item.id_subCategoria ? 'activeBtn' : ''}`}
                                    key={index}>
                                    {item.nome_subCategoria}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="filter-group">
                        <h2 className="subtitulo-filter">Cores</h2>
                        <div className="filter-options">
                            {cor.length > 0 && cor.map((item, index) => (
                                <label key={index} className="filter-checkbox">
                                    <input type="checkbox" onChange={() => pegarCor(item.id_cor)} />
                                    <span className="checkmark"></span>
                                    {item.desc_cor}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="filter-group">
                        <h2 className="subtitulo-filter">Tamanho</h2>
                        <div className="filter-options">
                            {tamanho.length > 0 && tamanho.map((item, index) => (
                                <label key={index} className="filter-checkbox">
                                    <input type="checkbox" onChange={() => pegarTamanho(item.id_tamanho)} />
                                    <span className="checkmark"></span>
                                    {item.desc_tamanho}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="container-btn-filter">
                        <button onClick={filtrarProduto} className="btn-aplicar">Aplicar Filtros</button>
                    </div>
                </section>
                <div className="produtos-categoria">
                    {produtoFiltrado.length > 0 ? (
                        produtoFiltrado.map((item, index) => (
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
                                    <button className="add-carrinho-card-categoria">
                                        <  TbShoppingCartUp className="icon-carrinh-categoria" />
                                    </button>
                                </div>
                            </Link>
                        ))
                    ) : (
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
                                    <button className="add-carrinho-card-categoria">
                                        <  TbShoppingCartUp className="icon-carrinh-categoria" />
                                    </button>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>


    )
}