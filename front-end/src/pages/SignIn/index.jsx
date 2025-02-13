import React, { useContext, useState } from "react";
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
                setNomeUsuario(usuario.nome_Adm);
                localStorage.setItem("nome", usuario.nome_adm);
                localStorage.setItem('id_adm', usuario.id_adm);
                localStorage.setItem('token',data.token)
           
                navigate('/');
            }



        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div className="container-signIn">
            <div className="header-signIn">
                <p>Logo</p>
            </div>
            <section className="container-signIn-signUp">
                <div className="div-signIn">
                    <h3 className="h3-sigIn">Já sou cliente</h3>
                    <div>
                        <InputMask
                            mask="999.999.999-99"
                            className="input"
                            type="text"
                            placeholder="CPF"
                            onChange={(txt) => setCpf(txt.target.value)}
                            value={cpf}
                        />



                        <input
                            className="input"
                            type="password"
                            placeholder="Senha"
                            onChange={(txt) => setSenha(txt.target.value)}
                            value={senha}
                        />
                    </div>
                    <span className="span-signIn">Esqueci minha senha</span>
                    <button
                        onClick={login}
                        className="btn-signIn">
                        Entrar
                    </button>
                    <button className="btn-criarConta">
                        Criar conta
                    </button>
                </div>

                <div className="div-signIn div-signUp">
                    <h3 className="h3-sigIn">Criar conta</h3>
                    <div>
                        <input
                            className="input"
                            placeholder='Email'
                            type='text'
                            onChange={(txt) => setEmail(txt.target.value)}
                            value={email}

                        />

                    </div>
                    <button className="btn-signIn">
                        Prosseguir
                    </button>
                </div>
            </section>
            <section className="entrar-google">
                <button className="btn-entrar-google">
                    <FcGoogle size={25} />
                    Entrar com o google
                </button>
            </section>
        </div>
    )
}
