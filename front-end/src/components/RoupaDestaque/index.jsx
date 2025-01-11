import React from "react";
import './style.css'

// Importação do Swiper e módulos necessários
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";


import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Destaque() {
    const navigate = useNavigate()
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
                        disableOnInteraction: false // Continua mesmo após interação do usuário
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
                 
                        <SwiperSlide>
                            <div className="card-roupa">
                                <img className="roupa-colecao-destaque" src="img/vestido.png" alt="" />
                                <p className="nome-roupa">Vestido elegante</p>
                                <p className="preco-roupa">R$ 89,99</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-roupa">
                                <img className="roupa-colecao-destaque" src="img/vestido.png" alt="" />
                                <p className="nome-roupa">Vestido elegante</p>
                                <p className="preco-roupa">R$ 89,99</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-roupa">
                                <img className="roupa-colecao-destaque" src="img/vestido.png" alt="" />
                                <p className="nome-roupa">Vestido elegante</p>
                                <p className="preco-roupa">R$ 89,99</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-roupa">
                                <img className="roupa-colecao-destaque" src="img/vestido.png" alt="" />
                                <p className="nome-roupa">Vestido elegante</p>
                                <p className="preco-roupa">R$ 89,99</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-roupa">
                                <img className="roupa-colecao-destaque" src="img/vestido.png" alt="" />
                                <p className="nome-roupa">Vestido elegante</p>
                                <p className="preco-roupa">R$ 89,99</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-roupa">
                                <img className="roupa-colecao-destaque" src="img/vestido.png" alt="" />
                                <p className="nome-roupa">Vestido elegante</p>
                                <p className="preco-roupa">R$ 89,99</p>
                            </div>
                        </SwiperSlide>
                    </section>
                </Swiper>
            </div>
        </div>
    )
}