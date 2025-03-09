import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import error from '../../assets/lottie/error.json'
export default function Erro() {


    const defaultOptions = {
        loop: true,
        Autoplay: true,
        animationData: error
    }


    const navigate = useNavigate()
    return (
        <div className="containerErro">
            <div>
                <h1 className="h1Erro">Página não encontrada</h1>
                <p>A página que você está procurando não existe ou não pôde ser encontrada.</p>
                <button
                    className="btnBeck"
                    onClick={() => navigate('/')}>
                    ir para pagina inicial
                </button>
            </div>

            <div>
                <Lottie options={defaultOptions} width={320} height={320} />
            </div>

          

        </div>
    )
}