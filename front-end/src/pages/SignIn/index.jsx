import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { Context } from "../../Contexto/provider";
import { useNavigate } from "react-router-dom";
import Windmill from "react-activity/dist/Windmill";
import "react-activity/dist/Windmill.css";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import Cookies from "js-cookie";

export default function SignIn() {
    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const { setNomeUsuario } = useContext(Context);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("nome")) {
            navigate("/");
        }
    }, [navigate]);

    const login = async (data) => {
        setLoadingBtn(true);

        if (!data.cpf || !data.senha) {
            setLoadingBtn(false);
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ cpf: data.cpf, senha: data.senha }),
            });

            const responseData = await response.json();

            if (response.status === 403) {
                navigate("/VerificarEmail", { state: { email: responseData.email_usuario } });
                return;
            }

            if (response.ok) {
                console.log(responseData)

                setNomeUsuario(responseData.nome);
                localStorage.setItem("nome", responseData.nome);
                localStorage.setItem("id_usuario", responseData.id);
                {
                    responseData.token && (
                        localStorage.setItem("token", responseData.token)

                    )
                }
                navigate("/");
            }

            else {
                alert("Erro ao fazer login. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingBtn(false);
        }
    };

    return (
        <div className="container-signIn">
            <section className="login">
                <div className="containerH3Login">
                    <h3 className="h3-sigIn">Que bom ter você aqui</h3>
                    <p>Entre e aproveite o melhor da Stylo</p>
                </div>

                <form onSubmit={handleSubmit(login)} className="containerInputLogin">
                    <div>
                        <p>Informe seu CPF</p>
                        {/* useform não suporta diretamente o inputMask,por isso tem que usar o controller */}
                        <Controller
                            name="cpf"
                            control={control}
                            rules={{ required: "CPF é obrigatório" }}
                            render={({ field }) => (
                                <IMaskInput
                                    {...field}
                                    mask="000.000.000-00"
                                    className="input"
                                    placeholder="CPF"
                                />
                            )}
                        />
                        {errors.cpf && <p className="error fs-6 text">{errors.cpf.message}</p>}
                    </div>

                    <div className="containerInputSenha">
                        <p>Informe sua senha</p>
                        <input
                            {...register("senha", { required: "Senha é obrigatória" })}
                            className="input"
                            type="password"
                            placeholder="Senha"
                        />
                        {errors.senha && <p className="error fs-6 text">{errors.senha.message}</p>}
                        <span className="esqueciSenha">Esqueci minha senha</span>
                    </div>

                    <div className="buttonsLogin">
                        <button type="submit" className="btn-signIn">
                            {loadingBtn ? <Windmill /> : "Entrar"}
                        </button>
                        <button
                            onClick={() => navigate("/criarConta")}
                            className="btn-criarConta"
                            type="button"
                        >
                            Criar conta
                        </button>
                    </div>
                </form>

                <div className="entrarComGoogle">
                    <span>ou</span>
                    <button className="btn-entrar-google">
                        <FcGoogle size={25} />
                        Entrar com o Google
                    </button>
                </div>
            </section>
        </div>
    );
}
