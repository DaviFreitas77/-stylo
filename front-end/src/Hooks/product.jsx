import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Contexto/provider";

const fetchColors = async (id_produto, url) => {
    const response = await fetch(`${url}/cor?id_produto=${id_produto}`, {
        method: 'GET'
    });

    const data = await response.json();
    return data;
}

export function colors(id_produto) {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchColors(id_produto, url),
        queryKey: ['color', id_produto]
    })

    if (isLoading) return { category: [], isLoading: true }
    if (error) return { category: [], isLoading: false }

    return { color: data, isLoading: false }
}


const fetchSize = async (id_produto, url) => {

    const response = await fetch(`${url}/tamanho?id_produto=${id_produto}`, {
        method: 'GET'
    });
    const data = await response.json();
    return data


}

export function sizes(id_produto) {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchSize(id_produto, url),
        queryKey: ['size', id_produto]
    })

    if (isLoading) return { size: [], isLoading: true }
    if (error) return { size: [], isLoading: false }

    return { size: data, isLoading: false }
}



const fetchProduct = async (id_produto, url) => {

    const response = await fetch(`${url}/produto?id_produto=${id_produto}`, {
        method: 'GET'
    });
    const data = await response.json();
    return data

}

export function product(id_produto) {
    const { url } = useContext(Context)
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchProduct(id_produto, url),
        queryKey: ['products', id_produto]
    })

    if (isLoading) return { size: [], isLoading: true }
    if (error) return { size: [], isLoading: false }

    return { products: data, isLoading: false }
}



const fetchInterestUser = async (subCategoria, url) => {

    const response = await fetch(`${url}/interesseUsuario?subCategoria=${subCategoria}`);
    const data = await response.json();
    return data


}

export function interestProduct(id_produto) {
    const { url } = useContext(Context)

    const { products } = product(id_produto);
    const subCategoria = products ? products[0].fk_subcategoria : null

    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchInterestUser(subCategoria, url),
        queryKey: ['productInterestUser', subCategoria],
        enabled: !!subCategoria
    })
    if (isLoading) return { size: [], isLoading: true }
    if (error) return { size: [], isLoading: false }

    return { productInterestUser: data, isLoading: false }

}