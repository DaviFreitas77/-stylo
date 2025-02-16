import React from "react";
import { useSelector } from "react-redux";
import './style.css'

export default function Favorito() {

    const produtos = useSelector(state => state.favorito)

    console.log('fav', { produtos })

    return (
        <div className="container-favoritos">
            <div className="headerFavoritos">
                <h1>Sua lista de desejos...</h1>
                <p>Seus produtos favoritos ficam aqui para você ver sempre que quiser.</p>
            </div>

            <div className="container-produtos-favorito">
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <div key={produto.id_produto}>
                            <div className="containerImgFavorito">
                                <img className="imgFavorito" src={produto.imagem_produto} alt={produto.nome_produto} />
                            </div>
                            <div className="infoProdutoFavorito">
                                <p className="nome-card">{produto.nome_produto}</p>
                                <p className="preco-card">{produto.preco_produto}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>aa</p>
                )}
            </div>
        </div>
    )
}