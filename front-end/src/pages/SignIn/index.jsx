import React, { useContext, useEffect, useState } from "react";
import './style.css'
import Botao from "../../components/Botao";
import { FcGoogle } from "react-icons/fc";
import { IMaskInput } from "react-imask";
import { Context } from "../../Contexto/provider";
import { useNavigate } from "react-router-dom";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";
export default function SignIn() {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const { setNomeUsuario, setToken } = useContext(Context)
    const [senhaError, setSenhaError] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false)

    const navigate = useNavigate();


    useEffect(() => {
        const nome = localStorage.getItem('nome')

        if (nome) {
            navigate('/')
        }
    }, [])
    const login = async () => {
        setLoadingBtn(true)
        if (!cpf || !senha) {
            alert('Preencha todos os campos');
            setSenhaError(true);
            setLoadingBtn(false)
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ cpf: cpf, senha: senha })
            });

            const data = await response.json();

            if (response.status === 403) {

                navigate('/VerificarEmail', { state: { email: data.email_usuario } });
                return;
            }

            if (response.ok) {
                const usuario = data[0];
                setNomeUsuario(usuario.nome_usuario);
                localStorage.setItem("nome", usuario.nome_usuario);
                localStorage.setItem('id_usuario', usuario.id_usuario);
                navigate('/');
            } else {
                alert('Erro ao fazer login. Verifique suas credenciais.');
                
            }

        } catch (error) {
            alert('Erro de conexão. Tente novamente mais tarde.');
            console.error(error);
        } finally {
            setLoadingBtn(false)
        }
    };



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
                        <IMaskInput 
                              mask="000.000.000-00"
                            className={`input ${senhaError ? 'input-error' : ''} `}
                            type="text"
                            placeholder="CPF"
                            onChange={(txt) => setCpf(txt.target.value)}
                            value={cpf}
                        />
                    </div>



                    <div className="containerInputSenha">
                        <p>Infome sua senha</p>
                        <input
                            className={`input ${senhaError ? 'input-error' : ''} `}
                            type="password"
                            placeholder="Senha"
                            onChange={(txt) => setSenha(txt.target.value)}
                            value={senha}
                        />
                        <span className="esqueciSenha">Esqueci minha senha</span>
                    </div>
                </div>
                <div className="buttonsLogin">
                    {loadingBtn ? (
                        <button
                            onClick={login}
                            className="btn-signIn">
                            <Dots />
                        </button>

                    ) : (

                        <button
                            onClick={login}
                            className="btn-signIn">
                            Entrar
                        </button>
                    )}
                    <button
                        onClick={() => navigate('/criarConta')}
                        className="btn-criarConta">
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
