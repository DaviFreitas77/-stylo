import React, { useEffect, useState } from "react";
import './style.css'

import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function DestaqueEstacao() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState([])
    const [quantidadeProduto, setQuantidadeProduto] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduto = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://127.0.0.1:8000/api/destaqueEstacao', {
                    method: 'GET',
                });

                const data = await response.json()
                setProduto(data)
                setQuantidadeProduto(data.length);
                setLoading(false)

            } catch (error) {
                console.log(error)
            }
        }
        getProduto()
    }, [])
    const shimmerPlaceholder = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <SwiperSlide key={index}>
                <ContentLoader
                    speed={3}
                    width={400}
                    height={300}
                    backgroundColor="gray"
                    foregroundColor="black"
                >
                    <rect x="16" y="16" rx="10" ry="10" width="200" height="230" />
                    <rect x="16" y="275" rx="5" ry="5" width="50" height="20" />
                    <rect x="16" y="250" rx="5" ry="5" width="100" height="20" />
                </ContentLoader>
            </SwiperSlide>
        ));
    };
    return (
        <div className="container-destaque-estacao">
            <img className="banner-estação" src="/img/inverno.png" alt="" />
            <h2 className="titulo-destaque-estacao">Destaque da estação</h2>

            <section className="destaque-estacao">
                <Swiper
                    className="swiper-estacao"
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    navigation
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        468:{
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {loading ? (
                        <div className="container-cards">
                            {shimmerPlaceholder()}
                        </div>
                    ) : (
                        <div className="container-cards">
                            {produto.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                    >
                                        <button
                                            onClick={() => {
                                                navigate(`/produto/${item.id_produto}`);
                                            }}

                                            className="card-estacao">
                                           
                                                <img className="img-card-estacao" src={item.imagem_produto} alt="" />
                                         
                                            <div className="nomeEprecoCard">
                                                <p className="nome-card">{item.nome_produto}</p>
                                                <p className="preco-card">{item.preco_produto}</p>
                                            </div>
                                        </button>
                                    </SwiperSlide>

                                )
                            })}
                        </div>
                    )}


                </Swiper>




            </section>


        </div>
    )
}