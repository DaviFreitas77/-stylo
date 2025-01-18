import React, { createContext } from "react";

export const Context = createContext();

export const Provider = ({children})=>{
    const [nomeUsuario,setNomeUsuario] = ('');
    
    return(
        <Context.Provider value={{ nomeUsuario, setNomeUsuario }}>
        {children}
      </Context.Provider>
    )
}