import React from "react";
import './style.css';
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { CiBookmarkRemove } from "react-icons/ci";

export default function DrawerCarrinho() {
    const produtos = useSelector(state => state.carrinho)

    return (
        <div>
            <div className="iconsMobile">
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <HiMiniShoppingCart className="icon " size={30} />
                </button>
                <span className="quantidade-carrinho">{produtos.length}</span>
            </div>


            <div className="offcanvas  offcanvas-end offcanvas-custom" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Meu carrinho</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <section className="section-carrinho">
                    {produtos.map(produtos => (
                        <div
                            className="card-produto-carrinho"
                            key={produtos.id_produto}>
                            <img className="image_carrinho" src={produtos.imagem_produto} alt="" />
                            <div className="nome_produto_and_remove">
                                <div className="container-quantidade">
                                    <div>
                                        <p>{produtos.nome_produto}</p>
                                        <p>{produtos.tamanho}/Preto</p>
                                    </div>
                                        <p>Qtd: {produtos.Qtd}</p>
                                </div>
                                <div className="btn_remove_and_preco">
                                    <CiBookmarkRemove size={30} />
                                    <span className="price-carrinho">
                                        R$ {produtos.preco_produto}
                                  
                                    </span>
                                </div>
                            </div>
                        </div>

                    ))}
                </section>

            </div>
        </div>
    );
}
