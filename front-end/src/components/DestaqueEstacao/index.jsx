
import './style.css'

import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { featuredStation } from "../../Hooks/featuredStation";




export default function DestaqueEstacao() {
    const { produto, isLoading } = featuredStation();

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },  
                    0: { slidesPerView: 2 }     
                }}
                className="swiper-loading"
            >
                {Array.from({ length: 5 }, (_, index) => (
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
                ))}
            </Swiper>
        );
    }



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
                        0: {
                            slidesPerView: 2,
                        }

                    }}
                >

                    <div className="container-cards">
                        {produto?.map((item, index) => {
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


                </Swiper>




            </section>


        </div>
    )
}