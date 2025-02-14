import React, { useContext, useEffect, useState } from "react";
import './style.css'
import Botao from "../../components/Botao";
import { FcGoogle } from "react-icons/fc";
import InputMask from 'react-input-mask'
import { Context } from "../../Contexto/provider";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const { setNomeUsuario, setToken } = useContext(Context)
    const navigate = useNavigate();


    useEffect(()=>{
        const nome = localStorage.getItem('nome')
        
        if(nome){
            navigate('/')
        }
    },[])

    const login = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cpf: cpf,
                    senha: senha
                })
            })



            const data = await response.json();

            if (data.message === 'usuario') {

                const usuario = data[0];
                setNomeUsuario(usuario.nome_usuario)
                localStorage.setItem("nome", usuario.nome_usuario);
                localStorage.setItem('id_usuario', usuario.id_usuario)
                navigate('/')
            }

            if (data.message === 'adm') {
                const usuario = data.adm;
                setNomeUsuario(usuario.nome_adm);
                localStorage.setItem("nome", usuario.nome_adm);
                localStorage.setItem('id_adm', usuario.id_adm);
                localStorage.setItem('token', data.token)
                navigate('/criarProduto');
            }



        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div className="container-signIn">

            <section className="login">

                <div className="containerH3Login">
                    <h3 className="h3-sigIn">Que bom ter você aqui</h3>
                    <p>entre e aproveite o melhor da stylo</p>
                </div>


                <div className="containerInputLogin">
                    <div>
                        <p>Infome seu CPF</p>
                        <InputMask
                            mask="999.999.999-99"
                            className="input"
                            type="text"
                            placeholder="CPF"
                            onChange={(txt) => setCpf(txt.target.value)}
                            value={cpf}
                        />
                    </div>



                    <div className="containerInputSenha">
                        <p>Infome sua senha</p>
                        <input
                            className="input"
                            type="password"
                            placeholder="Senha"
                            onChange={(txt) => setSenha(txt.target.value)}
                            value={senha}
                        />
                        <span className="esqueciSenha">Esqueci minha senha</span>
                    </div>
                </div>
                <div className="buttonsLogin">
                    <button
                        onClick={login}
                        className="btn-signIn">
                        Entrar
                    </button>
                    <button className="btn-criarConta">
                        Criar conta
                    </button>
                </div>
                <div className="entrarComGoogle">
                    <span>ou</span>
                    <button className="btn-entrar-google">
                        <FcGoogle size={25} />
                        Entrar com o google
                    </button>
                </div>
            </section>

        </div>
    )
}
