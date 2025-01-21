import React, { useContext, useState } from "react";
import './style.css'
import { ImUser } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"
import DrawerSeacrch from "../Drawer";
import { FaSearch } from "react-icons/fa";

import DrawerMobile from "../DrawerMobile";
import { Context } from "../../Contexto/provider";
export default function Header() {

    const [showDrawer, setShowDrawer] = useState(false)
    const [showDrawerMobile, setShowDrawerMobile] = useState(false)
    const { nomeUsuario } = useContext(Context)
    
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
                {nomeUsuario ? (
                    <div className="d-flex gap-2 mr-5 div-entrar">
                        <ImUser className="icon iconUser" size={25} />
                        <Link className="span-entrar" to={'Login'}>{nomeUsuario}</Link>
                    </div>
                ) : (
                    <div className="d-flex gap-2 mr-5 div-entrar">
                        <ImUser className="icon iconUser" size={25} />
                        <Link className="span-entrar" to={'/Login'}>Entrar</Link>
                    </div>
                )}

                <div className="iconsMobile">
                    <FaSearch className="icon iconSearch" size={22} />
                    <MdFavorite className="icon iconFavorito" size={25} />
                    <HiMiniShoppingCart className="icon " size={25} />
                </div>


            </div>
        </div>

    )
}