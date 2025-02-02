import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({children})=>{
    const [nomeUsuario,setNomeUsuario] = useState('');
    const [itensCarrinho,setItensCarrinho] = useState([])
    const [idCarrinho,setIdCarrinho] = useState('')
    const [url,setUrl] = useState('')

    
    return(
        <Context.Provider value={{ nomeUsuario, setNomeUsuario,url,setUrl,setItensCarrinho,itensCarrinho,idCarrinho,setIdCarrinho}}>
        {children}
      </Context.Provider>
    )
}