import React, { useContext, useState } from "react";
import { Context } from "../../Contexto/provider";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css'


export default function VerificarEmail() {
    const location = useLocation();
    const { email } = location.state || {};
    const [loadinButton, setLoadingButton] = useState(false)
    const [error,setError] = useState(false)
    const [correct,setCorrect] = useState(false)
    const navigate = useNavigate()



    const [codigo, setCodigo] = useState('')
    const emailVerificar = localStorage.getItem('emailVerificar')


    function verificarEmail() {
        setLoadingButton(true)
        fetch('http://127.0.0.1:8000/api/confirmaEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: emailVerificar ? emailVerificar : email,
                codigo: codigo
            })
        })
            .then(response => {
                if(response.status == 400){
                    setError(true)
                }else{
                    setCorrect(true)
                    setTimeout(() => {
                        navigate('/login') 
                        localStorage.removeItem('emailVerificar')

                    }, 1000);
                    
                }
                return response.json()
            })
            .catch((error) => {
                console.log(error);

            })
            .finally(()=>{
                setLoadingButton(false)
            });
    }

    return (
        <div className="containerVerificarEmail">
            <div>
                <h2>Digite o codigo que recebeu</h2>
                <p className="email">O codigo de 4 digitos foi enviado para <strong>{emailVerificar ? emailVerificar : email} </strong></p>
                <input type="number"
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Código"
                />
                {loadinButton ? (

                    <button onClick={verificarEmail}>carregando...</button>
                ) : (
                    <button onClick={verificarEmail}>Confirmar código</button>
                )}
                {error ?(
                    <p className="error">Código incorreto</p>
                ):(
                    null
                )}
                {correct?(
                       <p className="correct">Confirmado</p>
                ):(
                    null
                )}
            </div>
            <div>
            <img src="/public/img/verificarEmail.jpg" alt="" className="img-verificar-email" />
            </div>
        </div>
    )
}