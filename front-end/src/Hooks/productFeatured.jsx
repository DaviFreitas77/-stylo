import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Contexto/provider";

const fetchProcuctStation = async (url) => {
    const response = await fetch(`${url}/getDestaque`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar categorias')
    }

    const data = await response.json();
    return data;
}


export function ProductFeatured(){
    const {url} = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchProcuctStation(url),
        queryKey: ['product'],
    });
    
    if(isLoading) return{product:[],isLoading:true}
    return { product: data, isLoading: false }; 
    
}