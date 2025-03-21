import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Contexto/provider";

const fetchProduto = async (url) => {
    const response = await fetch( `${url}/destaqueEstacao` , {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error()
    }
    const data = response.json();
    return data
}

export function featuredStation() {
    const {url} = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: ()=>fetchProduto(url),
        queryKey: ['produto']
    })

    if (isLoading) return { produto: [], isLoading: true }
    if (error) return { product: [], isLoading: false }; 
    return {produto:data,isLoading:false};
}