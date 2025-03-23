
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
import { ProductFeatured } from "../../Hooks/productFeatured";



export default function Destaque() {
    const { product, isLoading } = ProductFeatured(); 
    const navigate = useNavigate();


    if (isLoading) {
        return <Loading />; 
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
                        {product?.map((item, index) => {
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
                                        <p className="preco-roupa">{Number(item.preco_produto).toLocaleString("pt-BR",{
                                            style:"currency",
                                            currency:"BRL"
                                        })}</p>
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
