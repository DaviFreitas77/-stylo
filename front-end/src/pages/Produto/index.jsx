import React, { useContext, useEffect, useState } from "react";
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
import { Context } from "../../Contexto/provider";
import { data } from "autoprefixer";
import Lottie from "react-lottie";
import heart from '../../assets/lottie/heart.json'
import ContentLoader from "react-content-loader";
import { addFavorito } from "../../store/modules/Favorito/action";
import { addCarrinho } from "../../store/modules/carrinho/actions";


export default function Produto() {
    const dispatch = useDispatch();
    const [subCategoria, setSubCateogira] = useState();
    const [produto, setProduto] = useState([])
    const [roupa, setRoupa] = useState([])
    const [tamanho, setTamanho] = useState([])
    const [quantidade, setQuantidade] = useState(1);
    const { idCarrinho, token } = useContext(Context)
    const [cor, setCor] = useState([])
    const [selectTamanho, setSelectTamanho] = useState('')
    const [selectCor, setSelectCor] = useState('')
    const [idCor, setIdCor] = useState('')
    const [idTamanho, setIdTamanho] = useState('')
    const navigate = useNavigate()
    const idUsuario = localStorage.getItem("id_usuario");
    const { id_produto } = useParams();




    const defaultOptions = {
        loop: false,
        Autoplay: true,
        animationData: heart
    }

    const traducaoCores = {
        preto: "black",
        vermelho: "red",
        azul: "blue",
        branco: "white",
        amarelo: "yellow",
        verde: "green",
        rosa: "pink"
    };

    function pressCor(item) {
        setSelectCor(item.desc_cor)
        setIdCor(item.fk_cor)
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


    //actions
    const handleAddFavorito = async (item) => {
        dispatch(addFavorito(item, idUsuario))
    }

    const handleAdd = async (item) => {
        if (!selectTamanho && !selectCor && !idCor) {
            alert('Por favor, selecione tamanho e cor antes de adicionar ao carrinho.');
            return;
        }

        if (!idUsuario) {
            navigate('/Login')
        }
        dispatch(addCarrinho(item, idCarrinho, idUsuario, quantidade, idCor, idTamanho, selectTamanho, selectCor))
    }


    return (
        <div className="container-produto">
             <Header/>
            {roupa.map((item, index) => (
                <section className="section-info-produto">

                    <div className="div-img-produto">
                        <img className="img-produto" src={item.imagem_produto} alt="" />
                    </div>
                    <div className="details-produto">
                        <div className="containerNome">
                            <h2 className="nome-produto">{item.nome_produto}</h2>
                            <button
                                onClick={() => handleAddFavorito(item)}
                            >
                                <Lottie options={defaultOptions} width={80} height={80} />
                            </button>

                        </div>
                        <p className="desc_produto">{item.desc_produto}</p>

                        <div className="container-cores">
                            <h3 className="subtitulo">Cores</h3>
                            <div className="container-icons-cores">

                                {cor.map((item, index) => (
                                    <button
                                        onClick={() => pressCor(item)}
                                        className="corButton"
                                        style={item.desc_cor === selectCor ? { opacity: '.2' } : {}}
                                        key={index}>
                                        <FaCircle color={traducaoCores[item.desc_cor]} size={30} />
                                    </button>

                                ))}
                            </div>
                        </div>

                        <div className="prices">
                            <p className="last-price">{`de R$${item.preco_antigo_produto}`}</p>
                            <p className="price-produto">{`R$ ${item.preco_produto}`}</p>
                        </div>

                        <div className="container-tamanho">
                            <h4 className="subtitulo">Tamanho</h4>
                            <select
                                onChange={(e) => {
                                    const selectedItem = tamanho.find(item => item.fk_tamanho === parseInt(e.target.value));
                                    if (selectedItem) {
                                        console.log(selectedItem)
                                        setSelectTamanho(selectedItem.desc_tamanho);
                                        setIdTamanho(selectedItem.fk_tamanho);
                                    }
                                }}

                                className="input-select" name="" id="">
                                <option value="" disabled>
                                    selecione
                                </option>
                                {tamanho.map((item, index) => (
                                    <option key={index} value={item.fk_tamanho}>{item.desc_tamanho}</option>
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

                                        <div className="nomeEprecoCard">
                                            <p className="nome-card">{prod.nome_produto}</p>
                                            <p className="preco-card">{prod.preco_produto}</p>
                                        </div>
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