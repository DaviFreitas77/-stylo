import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [itensCarrinho, setItensCarrinho] = useState([])
  const [idCarrinho, setIdCarrinho] = useState('')
  const [url, setUrl] = useState('')
  const [token, setToken] = useState('')
  const idUsuario = localStorage.getItem("id_usuario");
  const [emailVerificar, setEmailVerificar] = useState('')

  useEffect(() => {
    setUrl('http://127.0.0.1:8000/api');
  }, [url])


  useEffect(() => {
    if (!idUsuario) return;
    const fetchIdCarrinho = async () => {
      const carrinho = await fetch(`http://127.0.0.1:8000/api/carrinho?id_usuario=${idUsuario}`, {
        method: 'GET'
      });

      const dataCarrinho = await carrinho.json();
      setIdCarrinho(dataCarrinho.carrinho.id_carrinho);

    }
    fetchIdCarrinho();
  }, [])



  return (


    <Context.Provider value={{ nomeUsuario, setNomeUsuario, url, setUrl, setItensCarrinho, itensCarrinho, idCarrinho, setIdCarrinho, setToken, token, setEmailVerificar, emailVerificar }}>
      {children}
    </Context.Provider>
  )
}