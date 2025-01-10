import React from "react";

export default function Input({placeholder,type}){
    return(
        <div>
            <input className="input" type={type} placeholder={placeholder}/>
        </div>
    )
}