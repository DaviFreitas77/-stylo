import React, { useContext, useState, useEffect } from "react";
import './style.css'
import { ImUser } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"
import DrawerSeacrch from "../Drawer";
import { FaSearch } from "react-icons/fa";
import DrawerCarrinho from "../DrawerCarrinho";

import DrawerMobile from "../DrawerMobile";
import { Context } from "../../Contexto/provider";
export default function Header() {

    const idUsuario = localStorage.getItem("id_usuario");
    const { setIdCarrinho } = useContext(Context)

    useEffect(() => {
        const fetchIdCarrinho = async () => {
            const carrinho = await fetch(`http://127.0.0.1:8000/api/carrinho?id_usuario=${idUsuario}`, {
                method: 'GET'
            });

            const dataCarrinho = await carrinho.json();
            setIdCarrinho(dataCarrinho.carrinho.id_carrinho);

        }
        fetchIdCarrinho();
    }, [])

    const [showDrawer, setShowDrawer] = useState(false)
    const [showDrawerMobile, setShowDrawerMobile] = useState(false)
    const [drawerCarrinho, setDrawerCarrinho] = useState(false)
    const { nomeUsuario } = useContext(Context)
    const nome = localStorage.getItem("nome");

    return (
        <div className="container-header">
            <DrawerMobile />

            {showDrawer ? (
                <DrawerSeacrch showDrawer={showDrawer} setShowDrawer={setShowDrawer} />

            ) : null}
            <div className="div-input">
                <CiSearch size={25} />
                <input
                    onClick={() => setShowDrawer(true)}
                    type="search" name="" id="input-search" placeholder="ex: Camiseta" />
            </div>
            <h2>Logo</h2>
            <div className="icons-header">
                {(nome !== null && nome !== '') ? (
                    <div className="d-flex gap-2 mr-5 div-entrar">
                        <p>Olá {nome}</p>

                    </div>
                ) : (
                    <div className="d-flex gap-2 mr-5 div-entrar">
                        <ImUser className="icon iconUser" size={30} />
                        <Link className="span-entrar" to={'/Login'}>Entrar</Link>
                    </div>
                )}
                <div className="iconsMobile">
                    <FaSearch className="icon iconSearch" size={25} />
                    <MdFavorite className="icon iconFavorito" size={30} />

                    <DrawerCarrinho />
                </div>


            </div>
        </div>

    )
}