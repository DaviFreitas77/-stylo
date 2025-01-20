import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({children})=>{
    const [nomeUsuario,setNomeUsuario] = useState('');

    
    return(
        <Context.Provider value={{ nomeUsuario, setNomeUsuario}}>
        {children}
      </Context.Provider>
    )
}