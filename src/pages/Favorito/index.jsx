import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import './style.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Favorito() {

    const produtos = useSelector(state => state.favorito)
    console.log('aa', produtos)
    const navigate = useNavigate();
    const idUsuario = localStorage.getItem('id_usuario')
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/favoritos?id_usuario=${idUsuario}`)

                const data = await response.json()
                console.log(data)
                dispatch({
                    type: 'LOAD_FAVORITO',
                    payload: data
                })

            } catch (error) {
                console.log(error)
            }
        }

        fetchProduto()
    }, [])


    return (
        <div className="container-favoritos">
            <div className="headerFavoritos">
                <h1>Sua lista de desejos...</h1>
                <p>Seus produtos favoritos ficam aqui para você ver sempre que quiser.</p>
            </div>

            <div className="container-produtos-favorito">
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <button
                        className="cardFavorito"
                            onClick={() => navigate(`/produto/${produto.id_produto}`)}
                            key={produto.id_produto}>
                            <div className="containerImgFavorito">
                                <img className="imgFavorito" src={produto.imagem_produto} alt={produto.nome_produto} />
                            </div>
                            <div className="infoProdutoFavorito">
                                <p className="nome-card">{produto.nome_produto}</p>
                                <p className="preco-card">{produto.preco_produto}</p>
                            </div>
                        </button>
                    ))
                ) : (
                    <p>aa</p>
                )}
            </div>
        </div>
    )
}