import React, { useContext } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Context } from "../../Contexto/provider";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
export default function DrawerMobile() {
    const navigate = useNavigate();
    const nome = localStorage.getItem("nome");
    const {setToken,setNomeUsuario} =useContext(Context)
  
   
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
        <div className="container-drawerMobile">

            <button className ="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">  <HiOutlineMenuAlt1 className="icon iconMenu" size={35} /></button>



            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">

                </div>

                {nome ? (
                    <div>
                        <div className="headerDrawerMobile">
                            <div>
                                <div className="user">
                                    <CiUser color="#fff" size={25} />
                                    <p className="nome_drawer">
                                        ola {nome}
                                    </p>
                                </div>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="buttons_drawer_mobile">
                                <Link className="favoritos" to="/favorito">Meus favoritos</Link>
                                <Link className="pedidos" to="/favorito">Meus pedidos</Link>

                            </div>
                        </div>

                        <div className="sair">
                            <button onClick={sair} className="btnSair">Sair</button>
                        </div>
                    </div>

                ) : (
                    <div>
                        <div className="headerDrawerMobile">
                            <div>
                                <div className="user">
                                    <CiUser color="#fff" size={25} />
                                    <Link to="/Login" className="nome_drawer">Fazer login</Link>

                                </div>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            
                        </div>


                    </div>

                )}

            </div>
        </div>
    )
}