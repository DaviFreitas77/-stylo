import React from "react";
import './style.css'
import Input from "../../components/Input";
import Botao from "../../components/Botao";
import { FcGoogle } from "react-icons/fc";
export default function SignIn() {
    return (
        <div className="container-signIn">
            <div className="header-signIn">
                <p>Logo</p>
            </div>
            <section className="container-signIn-signUp">
                <div className="div-signIn">
                    <h3 className="h3-sigIn">Já sou cliente</h3>
                    <div>
                        <Input
                            placeholder='CPF'
                            type='number'
                        />
                        <Input
                            placeholder='Senha'
                            type="password"
                        />
                    </div>
                    <span className="span-signIn">Esqueci minha senha</span>
                    <button className="btn-signIn">
                        Entrar
                    </button>
                <button className="btn-criarConta">
                    Criar conta
                </button>
                </div>

                <div className="div-signIn div-signUp">
                    <h3 className="h3-sigIn">Criar conta</h3>
                    <div>
                        <Input
                            placeholder='Email'
                            type='text'
                        />

                    </div>
                    <button className="btn-signIn">
                        Prosseguir
                    </button>
                </div>
            </section>
            <section className="entrar-google">
                <button className="btn-entrar-google">
                    <FcGoogle size={25}/>
                    Entrar com o google
                </button>
            </section>
        </div>
    )
}