import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Contexto/provider";

const fetchCategory = async (url) => {
    const response = await fetch(`${url}/getCategorias`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar categorias");
    }

    const data = await response.json()
    return data
};

export function colection() {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchCategory(url),
        queryKey:['category']
    })

    if(isLoading) return{category:[],isLoading:true}
    if(error) return{category:[],isLoading:false}
    
    return{category:data,isLoading:false}
}