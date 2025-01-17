import React, { useEffect, useState } from "react";
import './style.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Destaque() {
    const [produtoDestaque, setProdutoDestaque] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const produtoDestaque = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/getDestaque', {
                    method: 'GET',
                });

                const data = await response.json();
                setProdutoDestaque(data);
      
            } catch (error) {
                console.log(error);
            }
        };
        produtoDestaque();
    }, []);

    return (
        <div className="container-destaque">
            <h1 className="titulo-sesssao">Novidades em Alta</h1>
            <div className="destaque">
                <img className="img-destaque" src="/img/destaque.png" alt="" />

                <Swiper
                    className="swiper"
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={4}
                    slidesPerView={3}
                    loop={true}
                    navigation
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    <section className="colecao-destaque">
                        {produtoDestaque.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <button
                                    onClick={() => {
                                        navigate('/produto', { state: { item } });
                                    }}
                                    className="card-roupa">
                                        <img
                                            className="roupa-colecao-destaque"
                                            src={item.imagem_produto || "/img/vestido.png"}  
                                            alt={item.nome_produto}
                                        />
                                        <p className="nome-roupa">{item.nome_produto}</p>
                                        <p className="preco-roupa">{`R$${item.preco_produto}`}</p>
                                    </button>
                                </SwiperSlide>
                            );
                        })}
                    </section>
                </Swiper>
            </div>
        </div>
    );
}
