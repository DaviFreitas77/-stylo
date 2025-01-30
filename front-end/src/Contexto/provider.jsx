import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({children})=>{
    const [nomeUsuario,setNomeUsuario] = useState('');
    const [idUsuario,setIdUsuario] = useState('')
    const [url,setUrl] = useState('')

    
    return(
        <Context.Provider value={{ nomeUsuario, setNomeUsuario,url,setUrl,setIdUsuario,idUsuario}}>
        {children}
      </Context.Provider>
    )
}