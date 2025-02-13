import React, { useContext, useState, useEffect } from "react";
import './style.css'
import { ImUser } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link, Navigate } from "react-router-dom"
import DrawerSeacrch from "../Drawer";
import { FaSearch } from "react-icons/fa";
import DrawerCarrinho from "../DrawerCarrinho";

import DrawerMobile from "../DrawerMobile";
import { Context } from "../../Contexto/provider";
export default function Header() {

    const [showDrawer, setShowDrawer] = useState(false)
    const [showDrawerMobile, setShowDrawerMobile] = useState(false)
    const [drawerCarrinho, setDrawerCarrinho] = useState(false)
    const { nomeUsuario, setNomeUsuario } = useContext(Context)
    const nome = localStorage.getItem("nome");


    const { setToken } = useContext(Context)


    const sair = () => {
        setToken('')
        setNomeUsuario('')
        localStorage.removeItem('nome');
        localStorage.removeItem('id_adm');
        localStorage.removeItem('id_usuario');
        localStorage.removeItem('token')
        Navigate('/')
    }

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
                <div class="dropdown">
                    <a class=" d-flex justify-content-center align-items-center dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {(nome !== null && nome !== '') ? (
                            <div className="d-flex gap-2 mr-5 div-entrar">
                                <p>{nome}</p>

                            </div>
                        ) : (
                            <div className="d-flex gap-2 mr-5 div-entrar">
                                <ImUser className="icon iconUser" size={30} />
                                <Link className="span-entrar" to={'/Login'}>Entrar</Link>
                            </div>
                        )}
                    </a>

                    <ul class="dropdown-menu">
                        {nome !== null ? (

                            <button onClick={sair}><a class="dropdown-item" >Sair</a></button>

                        ) : (

                            <button onClick={sair}><a class="dropdown-item"><Link className="span-entrar" to={'/Login'}>Entrar</Link></a></button>
                        )}
                    </ul>
                </div>
                <div className="iconsMobile">
                    <FaSearch className="icon iconSearch" size={25} />
                    <MdFavorite className="icon iconFavorito" size={30} />

                    <DrawerCarrinho />
                </div>


            </div>
        </div>

    )
}