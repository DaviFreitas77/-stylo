import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Contexto/provider";
import { colors, product } from "./product";



const fetchCategory = async (id_categoria, url) => {
    const response = await fetch(`${url}/getsubCategoriaProduto/${id_categoria}`, {
        method: "Get"
    })

    const data = await response.json();
    return data;

}

export function loadCategory(id_categoria) {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchCategory(id_categoria, url),
        queryKey: ['category', id_categoria]
    })

    if (isLoading) return { category: [], isLoading: true }
    if (error) return { category: [], isLoading: false }
    return { category: data, isLoading: false }
}


const fetchColor = async (url) => {
    const response = await fetch(`${url}/getcor`, {
        method: "GET"
    })

    const data = await response.json();
    return data;
}

export function loadColor() {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchColor(url),
        queryKey: ['colors']
    })

    if (isLoading) return { colors: [], isLoading: true }
    if (error) return { colors: [], isLoading: false }
    return { colors: data, isLoading: false }
}



const fetchSize = async (url) => {

    const response = await fetch(`${url}/gettamanho`, {
        method: "GET"
    })

    const data = await response.json();
    return data

}

export function loadSize() {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchSize(url),
        queryKey: ['sizes']
    })

    if (isLoading) return { sizes: [], isLoading: true }
    if (error) return { sizes: [], isLoading: false }
    return { sizes: data, isLoading: false }
}


const loadProductCategoria = async (id_categoria, url) => {
    const response = await fetch(`${url}/produtosCategoria?id_categoria=${id_categoria}  `, {
        method: "GET"
    });

    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;

}

export function loadProductCategory(id_categoria) {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => loadProductCategoria(id_categoria, url),
        queryKey: ['product', id_categoria],
        enabled: !!id_categoria
    })

    if (isLoading) return { product: [], isLoading: true }
    if (error) return { product: [], isLoading: false }

    return { product: data, isLoading: false }
}