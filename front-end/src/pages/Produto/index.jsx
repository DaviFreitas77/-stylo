import React, { useEffect, useState } from "react";
import './style.css'
import Header from '../../components/Header'
import Botao from '../../components/Botao'
import { FaCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md"
import { MdOutlineArrowForwardIos } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/LoadingAnimation";
import { useDispatch } from "react-redux";

export default function Produto() {
    const dispatch = useDispatch();
    const [subCategoria, setSubCateogira] = useState();
    const [produto, setProduto] = useState([])
    const [roupa, setRoupa] = useState([])
    const [tamanho, setTamanho] = useState([])
    const [cor, setCor] = useState([])
    const [selectTamanho, setSelectTamanho] = useState('')
    const [selectCor, setSelectCor] = useState('')
    const navigate = useNavigate()
    const { id_produto } = useParams();



    const traducaoCores = {
        preto: "black",
        vermelho: "red",
        azul: "blue",
        branco: "white",
        amarelo: "yellow",
        verde: "green"
    };

    function pressCor(item) {
        setSelectCor(item)
    }

    useEffect(() => {
        const cor = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/cor?id_produto=${id_produto}`, {
                    method: 'GET'
                });

                const data = await response.json();
                setCor(data)
            } catch (error) {
                console.log(error)
            }
        }

        const tamanho = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/tamanho?id_produto=${id_produto}`, {
                    method: 'GET'
                });
                const data = await response.json();
                setTamanho(data)

            } catch (error) {
                console.log(error)
            }
        }


        const fetchProduto = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/produto?id_produto=${id_produto}`, {
                    method: 'GET'
                });
                const data = await response.json();
                setSubCateogira(data[0].fk_subcategoria);
                setRoupa(data)

            } catch (error) {
                console.log(error)
            }
        }


        const getInteresseUsuario = async () => {
            if (subCategoria) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/interesseUsuario?subCategoria=${subCategoria}`);
                    const data = await response.json();
                    setProduto(data);
                    console.log(data);
                } catch (error) {
                    console.error('Erro:', error);
                }
            }
        }
        fetchProduto()
        getInteresseUsuario()
        tamanho()
        cor()
    }, [id_produto, subCategoria])


    function handleAdd(item) {
        if (!selectTamanho || !selectCor) {
            alert('Por favor, selecione tamanho e cor antes de adicionar ao carrinho.');
            return;
        }

        dispatch({
            type: 'ADD_CARRINHO',
            item: {
                ...item,
                tamanho: selectTamanho,
                cor:selectCor
            },
        });
    }

    return (
        <div className="container-produto">
            {roupa.map((item, index) => (
                <section className="section-info-produto">

                    <div className="div-img-produto">
                        <img className="img-produto" src={item.imagem_produto} alt="" />
                    </div>
                    <div className="details-produto">
                        <h2 className="nome-produto">{item.nome_produto}</h2>
                        <p className="desc_produto">{item.desc_produto}</p>

                        <div className="container-cores">
                            <h3 className="subtitulo">Cores</h3>
                            <div className="container-icons-cores">

                                {cor.map((item, index) => (
                                    <button
                                        onClick={() => pressCor(item.desc_cor)}
                                        style={item.desc_cor === selectCor ? { opacity: '.2' } : {}}
                                        key={index}>
                                        <FaCircle color={traducaoCores[item.desc_cor]} size={30} />
                                    </button>

                                ))}


                            </div>
                        </div>

                        <div className="prices">
                            <p className="last-price">{`de R$${item.preco_produto}`}</p>
                            <p className="price-produto">{`R$ ${item.preco_produto}`}</p>
                        </div>

                        <div className="container-tamanho">
                            <h4 className="subtitulo">Tamanho</h4>

                            <select
                                value={selectTamanho}
                                onChange={(e) => setSelectTamanho(e.target.value)}
                                className="input-select" name="" id="">
                                <option value="" disabled>
                                    selecione
                                </option>
                                {tamanho.map((item, index) => (
                                    <option key={index} value={item.desc_tamanho}>{item.desc_tamanho}</option>
                                ))}


                            </select>

                        </div>

                        <button
                            onClick={() => handleAdd(item)}
                            className="botao">
                            Adicionar ao carrinho
                        </button>
                        <button className="botao" style={{ backgroundColor: 'white', border: '1px solid black', color: "black" }}>
                            Salvar como favorito
                        </button>
                    </div>
                </section>
            ))}


            <section className="produtos">
                <h2 className="subtitulo">Looks que combinam com você</h2>
                <div className="container-pagination">

                    <div className="navigation-buttons">
                        <button className="custom-prev"><MdOutlineArrowBackIos size={40} /></button>
                        <button className="custom-next"><MdOutlineArrowForwardIos size={40} /></button>
                    </div>
                </div>
                {produto.length > 0 ? (
                    <Swiper
                        className="swiper"
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={4}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        pagination={true}
                        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
                            },
                            0: {
                                slidesPerView: 2,
                            }
                        }}
                    >
                        {produto.map((prod, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                >
                                    <button

                                        onClick={() => {
                                            navigate(`/produto/${prod.id_produto}`,); //
                                        }}
                                        className="card-estacao"
                                    >
                                        <div>
                                            <img className="img-card-estacao" src={prod.imagem_produto} alt="" />
                                        </div>
                                        <p className="nome-card">{prod.nome_produto}</p>
                                        <p className="preco-card">{prod.preco_produto}</p>
                                    </button>
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>
                ) : (
                    <Loading />
                )}


            </section>
        </div>
    )
}