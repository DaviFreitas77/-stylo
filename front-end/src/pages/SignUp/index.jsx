import React, { useContext, useState } from "react";
import { IMaskInput } from "react-imask";
import './style.css'
import { useNavigate } from "react-router-dom";
import { Windmill } from "react-activity";
import "react-activity/dist/Windmill.css";
import { useForm, Controller } from "react-hook-form";
import { Context } from "../../Contexto/provider";
export default function SignUp() {
    const {url} = useContext(Context)


    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const [loadingButton, setLoadingButton] = useState(false)
    const navigate = useNavigate();



    const CriarConta = async (data) => {
        setLoadingButton(true)
        if (!data.cpf || !data.senha || !data.numero || !data.nome) {
            setLoadingButton(false)
            return;
        }
        try {
            const response = await fetch(`${url}/criarUsuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cpf_usuario: data.cpf,
                    nome_usuario: data.nome,
                    email_usuario: data.email,
                    numero_usuario: data.numero,
                    senha_usuario: data.senha
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message)
            } else {
                localStorage.setItem('emailVerificar', data.email)
                navigate('/VerificarEmail')


            }


        } catch (error) {
            console.log(error)
        } finally {
            setLoadingButton(false)
        }

    }

    return (
        <div className="container-signIn">
            <section className="login">
                <div className="containerH3Login">
                    <h3 className="h3-sigIn">Vamos criar sua conta  </h3>
                    <p>Os campos abaixo são essenciais para criarmos sua conta </p>
                </div>


                <form
                    onSubmit={handleSubmit(CriarConta)}
                    className="containerInputLogin">
                    <div>
                        <p>CPF</p>
                        <Controller
                            name="cpf"
                            control={control}
                            rules={{ required: 'o cpf é obrigatório' }}
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
                    <div>
                        <p>Nome</p>
                        <input
                            {...register("nome", { required: "o nome é obrigatório" })}
                            type="text"
                            className="input"
                            placeholder="EX: Davi"
                            name="nome"


                        />
                        {errors.nome && <p className="error fs-6 text">{errors.nome.message}</p>}
                    </div>

                    <div>
                        <p>Numero</p>
                        <Controller
                            name="numero"
                            control={control}
                            rules={{ required: 'o numero é obrigatório' }}
                            render={({ field }) => (
                                <IMaskInput
                                    {...field}
                                    mask="(00)000000000"
                                    className="input"
                                    type="text"
                                    placeholder="(00)0000000000"


                                />
                            )}
                        />
                        {errors.numero && <p className="error fs-6 text">{errors.numero.message}</p>}
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email"
                            {...register("email", { required: "o email é obrigatório" })}
                            name="email"
                            className="input"
                            placeholder="Email"
                        />
                        {errors.email && <p className="error fs-6 text">{errors.email.message}</p>}
                    </div>




                    <div className="containerInputSenha">
                        <p>Senha</p>
                        <input
                            {...register("senha", { required: 'a senha é obrigatória' })}
                            name="senha"
                            className="input"
                            type="password"
                            placeholder="*********"

                        />
                        {errors.senha && <p className="error fs-6 text">{errors.senha.message}</p>}

                    </div>
                    {loadingButton ? (

                        <button type="submit" className="btn-signIn">
                            <Windmill />
                        </button>
                    ) : (
                        <button type="submit" className="btn-signIn">
                            criar conta
                        </button>
                    )}


                </form>
                <div className="buttonsLogin">


                </div>

            </section>




        </div>
    )
}