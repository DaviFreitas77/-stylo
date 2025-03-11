import React, { useContext, useState } from "react";
import { Context } from "../../Contexto/provider";
import { useLocation } from "react-router-dom";

export default function VerificarEmail() {
    const location = useLocation();
    const { email } = location.state || {}; 
    console.log(email)

    const [codigo, setCodigo] = useState('')
    const { emailVerificar } = useContext(Context)


    function verificarEmail() {
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
            .then(response => response.json())
            .then(data => {
                console.log(data);
        
            })
            .catch((error) => {
                console.log(error);
           
            });
    }

    return (
        <div className="containerVerificarEmail">
            <input type="number"
                onChange={(t) => setCodigo(t.target.value)}
                style={{ border: '1px solid pink' }}

            />
              <button onClick={verificarEmail}>Verificar</button>
        </div>
    )
}