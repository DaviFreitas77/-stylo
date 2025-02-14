import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'
export default function Checkout() {
    const produtos = useSelector(state => state.carrinho);

    return (
        <div className='containerCheckOut'>

            <div className='containerProdutoCheckOut'>
                <div className='produto'>
                    {produtos.map((produto, index) => (
                        <div className='containerProduto' key={index}>
                            <div className='produtoCheck'>
                                <img className='imgCheckOutProduto' src={produto.imagem_produto} alt="" />
                                <div className='infoProdutoCheck'>
                                    <p className='nomeCheckOut'>{produto.nome_produto}</p>
                                    <p>vendido por STYLO</p>
                                    <p>tamanho: {produto.desc_tamanho}</p>
                                    <p>cor: {produto.desc_cor}</p>
                                    <p>quantidade: {produto.quantidade}</p>
                                    <span className="last-price">
                                        R$ 290,00
                                    </span>
                                    <span className="price-carrinho">
                                        R$ {produto.preco_produto}
                                    </span>
                                </div>
                            </div>
                            <div class="linha"></div>
                        </div>
                    ))}

                </div>
            </div>
            <div className='containerTotalChecl'>
                <h2 className='h2CheckOut'>Resumo da compra</h2>
                <div className='totalCheck'>
                    Total: ({produtos.length} itens)
                    <h3>

                        R$  {produtos.reduce((total, produto) => total + (produto.preco_produto * produto.quantidade), 0).toFixed(2)}
                    </h3>
                </div>
                <button className='botao'>
                    finalizar
                </button>
            </div>
        </div>
    );
}
