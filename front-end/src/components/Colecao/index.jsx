import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/LoadingAnimation";
import { useQuery } from "@tanstack/react-query";
import './style.css';
import { Context } from "../../Contexto/provider";
import ContentLoader from "react-content-loader";
import { colection } from "../../Hooks/colection";



export default function Colecao() {
    const {category,isLoading,error} = colection()

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container-colecao">
         
                {category?.map((item,index)=>(
                     <Link
                     to={`/produtos-categoria/${item.id_categoria}`}
                     key={index}
                     className="btnColecao"
                 >
                     <img
                         className="img-colecao"
                         src={item.imagem_categoria}
                         alt={item.nome_categoria}
                     />
                 </Link>
                ))}
                   
              
            
        </div>
    );
}
