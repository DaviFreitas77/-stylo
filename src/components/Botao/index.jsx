import React from "react";
import './style.css'
export default function Botao({text}){
    return(
        <div className="container-botao">
            <button className="botao">
                <span>{text}</span>
            </button>
        </div>
    )
}