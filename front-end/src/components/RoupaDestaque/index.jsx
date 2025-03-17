import React, { useContext, useEffect, useState } from "react";
import './style.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import { Context } from "../../Contexto/provider";
import Loading from "../Loading/LoadingAnimation";

const fetchDestaque = async (url) => {
    const response = await fetch(`${url}/getDestaque`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar categorias')
    }

    return response.json()
}

export default function Destaque() {
    const { url } = useContext(Context)
    const navigate = useNavigate();

    const { data: produtoDestaque, isLoading, isError, error } = useQuery({
        queryKey: ['produtoDestaque'],
        queryFn: () => fetchDestaque(url)
    })
    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }


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
                    loop={false}
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
                                            navigate(`/produto/${item.id_produto}`);
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
