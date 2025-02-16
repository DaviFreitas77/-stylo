import React, { useContext, useState } from "react";
import './style.css'
import { ImUser } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom"
import DrawerSeacrch from "../Drawer";
import { FaSearch } from "react-icons/fa";
import DrawerCarrinho from "../DrawerCarrinho";
import DrawerMobile from "../DrawerMobile";
import { Context } from "../../Contexto/provider";

export default function Header() {
    const navigate = useNavigate();
    const [showDrawer, setShowDrawer] = useState(false);
    const [showDrawerMobile, setShowDrawerMobile] = useState(false);
    const [drawerCarrinho, setDrawerCarrinho] = useState(false);
    const { nomeUsuario, setNomeUsuario } = useContext(Context);
    const nome = localStorage.getItem("nome");

    const { setToken } = useContext(Context);

    // Função para fazer logout
    const sair = () => {
        setToken('');
        setNomeUsuario('');
        localStorage.removeItem('nome');
        localStorage.removeItem('id_adm');
        localStorage.removeItem('id_usuario');
        localStorage.removeItem('token');
        navigate('/');
    };

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

                {nome && nome !== '' ? (
                    <div className="dropdown">
                        <button
                            className=" dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {nome}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                                <button onClick={sair} className="dropdown-item">Sair</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="d-flex gap-2 mr-5 div-entrar">
                        <ImUser className="icon iconUser" size={30} />
                        <Link className="span-entrar" to={'/Login'}>Entrar</Link>
                    </div>
                )}

                <div className="iconsMobile">
                    <FaSearch className="icon iconSearch" size={25} />
                    <MdFavorite 
                    onClick={()=>navigate('/favorito')}
                    className="icon iconFavorito" size={30} color="red" />
                    <DrawerCarrinho />
                </div>
            </div>
        </div>
    );
}
