import React, { useContext, useState } from "react";
import InputMask from "react-input-mask";
import './style.css'
import { useNavigate } from "react-router-dom";
import signUp from '../../assets/lottie/signUp.json'
import { Context } from "../../Contexto/provider";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";
export default function SignUp() {

    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [numero, setNumero] = useState('')
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [loadinButton, setLoadingButton] = useState(false)
    const navigate = useNavigate();



    const CriarConta = async () => {
        setLoadingButton(true)
        if (!cpf || !senha || !numero || !nome) {
            setLoadingButton(false)
            alert('Preencha todos os campos')
        }
        try {
            const response = await fetch('http://127.0.0.1:8000/api/criarUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cpf_usuario: cpf,
                    nome_usuario: nome,
                    email_usuario: email,
                    numero_usuario: numero,
                    senha_usuario: senha
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message)
            } else {
                const data = await response.json();
                setNome('')
                setCpf('')
                setNumero('')
                setSenha('')
                 localStorage.setItem('emailVerificar',email)
                setEmail('')
                navigate('/VerificarEmail')


            }


        } catch (error) {
            console.log(error)
        } finally {
            setLoadingButton(false)
        }

    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: signUp
    }

    return (
        <div className="container-signIn">
            <section className="login">
                <div className="containerH3Login">
                    <h3 className="h3-sigIn">Vamos criar sua conta  </h3>
                    <p>Os campos abaixo são essenciais para criarmos sua conta Centauro</p>
                </div>


                <div className="containerInputLogin">
                    <div>
                        <p>CPF</p>
                        <InputMask
                            mask="999.999.999-99"
                            className="input"
                            type="text"
                            placeholder="CPF"
                            onChange={(txt) => setCpf(txt.target.value)}
                            value={cpf}

                        />
                    </div>
                    <div>
                        <p>Nome</p>
                        <input
                            type="text"
                            className="input"
                            placeholder="EX: Davi"
                            onChange={(txt) => setNome(txt.target.value)}
                            value={nome}

                        />
                    </div>

                    <div>
                        <p>Numero</p>
                        <InputMask
                            mask="(99)999999999"
                            className="input"
                            type="text"
                            placeholder="(00)0000000000"
                            onChange={(txt) => setNumero(txt.target.value)}
                            value={numero}

                        />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email"
                            className="input"
                            placeholder="Email"
                            onChange={(txt) => setEmail(txt.target.value)}
                            value={email}

                        />
                    </div>



                    <div className="containerInputSenha">
                        <p>Senha</p>
                        <input
                            className="input"
                            type="password"
                            placeholder="*********"
                            onChange={(txt) => setSenha(txt.target.value)}
                            value={senha}

                        />

                    </div>
                </div>
                <div className="buttonsLogin">

                    {loadinButton ? (
                        <button
                            onClick={CriarConta}
                            className="btn-signIn">
                            <Dots />

                        </button>

                    ) : (
                        <button
                            onClick={CriarConta}
                            className="btn-signIn">
                            Criar conta
                        </button>
                    )}
                </div>

            </section>




        </div>
    )
}