import React from "react";
import './style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function DestaqueEstacao() {
    return (
        <div className="container-destaque-estacao">
            <img className="banner-estação" src="/img/inverno.png" alt="" />
            <h2 className="titulo-destaque-estacao">Destaque da estação</h2>
            <Swiper
                modules={[Autoplay, Navigation]}
                className="swiper"
                slidesPerView={5}
                spaceBetween={6}
                loop={true}
                navigation
                breakpoints={{
                    
                    768: {
                        slidesPerView: 4, 
                    },
                  
                    1024: {
                        slidesPerView: 4, 
                    },
                 
                    0: {
                        slidesPerView: 2, 
                    }
                }}

            >
                <section className="destaque-estacao">
                    <SwiperSlide >

                        <div className="card-destaque-estacao">
                            <img className="img-destaque-estacao" src="/img/moletom.png" alt="" />
                            <p className="nome-destaque-estacao">Conjunto moletom</p>
                            <p className="preco-destaque-estacao">R$249,99</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="card-destaque-estacao">
                            <img className="img-destaque-estacao" src="/img/moletom.png" alt="" />
                            <p className="nome-destaque-estacao">Conjunto moletom</p>
                            <p className="preco-destaque-estacao">R$249,99</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="card-destaque-estacao">
                            <img className="img-destaque-estacao" src="/img/moletom.png" alt="" />
                            <p className="nome-destaque-estacao">Conjunto moletom</p>
                            <p className="preco-destaque-estacao">R$249,99</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="card-destaque-estacao">
                            <img className="img-destaque-estacao" src="/img/moletom.png" alt="" />
                            <p className="nome-destaque-estacao">Conjunto moletom</p>
                            <p className="preco-destaque-estacao">R$249,99</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="card-destaque-estacao">
                            <img className="img-destaque-estacao" src="/img/moletom.png" alt="" />
                            <p className="nome-destaque-estacao">Conjunto moletom</p>
                            <p className="preco-destaque-estacao">R$249,99</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="card-destaque-estacao">
                            <img className="img-destaque-estacao" src="/img/moletom.png" alt="" />
                            <p className="nome-destaque-estacao">Conjunto moletom</p>
                            <p className="preco-destaque-estacao">R$249,99</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="card-destaque-estacao">
                            <img className="img-destaque-estacao" src="/img/moletom.png" alt="" />
                            <p className="nome-destaque-estacao">Conjunto moletom</p>
                            <p className="preco-destaque-estacao">R$249,99</p>
                        </div>
                    </SwiperSlide>
                </section>
            </Swiper>

        </div>
    )
}