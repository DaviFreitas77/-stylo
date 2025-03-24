import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Contexto/provider";

const fetchSubCategoria = async (url) => {

    const response = await fetch(`${url}/getSubCategorias`, {
        method: 'GET',
    })
    const data = await response.json();

    return data;
}

export function loadSubCategory() {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchSubCategoria(url),
        queryKey: ['subCategory']
    })
    if (isLoading) return { subCategory: [], isLoading: true }
    if (error) return { subCategory: [], isLoading: false }

    return { subCategory: data, isLoading: false }
}


const fetchTamanho = async (url) => {

    const response = await fetch(`${url}/gettamanho`, {
        method: 'GET',
    })
    const data = await response.json();

    return data;
}


export function loadSizes() {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchTamanho(url),
        queryKey: ['size']
    })
    if (isLoading) return { size: [], isLoading: true }
    if (error) return { size: [], isLoading: false }
    return { size: data, isLoading: false }

}

const fetchColor = async (url) => {
    const response = await fetch( `${url}/getcor`, {
        method: 'GET',
    })
    const data = await response.json();
    return data;
} 

export function loadColor() {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchColor(url),
        queryKey: ['color']
    })
    if (isLoading) return { color: [], isLoading: true }
    if (error) return { color: [], isLoading: false }

    return { color: data, isLoading: false }
}


