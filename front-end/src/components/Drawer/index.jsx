import React from "react";
import './style.css';
import { IoCloseSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
export default function DrawerSearch({ showDrawer, setShowDrawer }) {
    return (
        <div className="container-drawer">
            <div className={showDrawer ? 'openDrawer' : 'closeDrawer'}>
                <div className="div-input-drawer">
                    <IoSearch size={25} />
                    <input className="input" type="search" placeholder="ex:camiseta" />
                </div>
                <button onClick={() => setShowDrawer(false)}> <IoCloseSharp size={35} /></button>
            </div>
            <section className="container-card-drawer">
                <div className="card-drawer">
                    <div >
                        <img className="img-roupa-drawer" src="/img/vestido.png" alt="" />
                    </div>
                    <p className="nome-card">Vestido Elegante</p>
                    <p className="preco-card">R$ 69,99</p>
                </div>
                <div className="card-drawer">
                    <div >
                        <img className="img-roupa-drawer" src="/img/vestido.png" alt="" />
                    </div>
                    <p className="nome-card">Vestido Elegante</p>
                    <p className="preco-card">R$ 69,99</p>
                </div>
                <div className="card-drawer">
                    <div >
                        <img className="img-roupa-drawer" src="/img/vestido.png" alt="" />
                    </div>
                    <p className="nome-card">Vestido Elegante</p>
                    <p className="preco-card">R$ 69,99</p>
                </div>
                <div className="card-drawer">
                    <div >
                        <img className="img-roupa-drawer" src="/img/vestido.png" alt="" />
                    </div>
                    <p className="nome-card">Vestido Elegante</p>
                    <p className="preco-card">R$ 69,99</p>
                </div>
              
            </section>

        </div>
    );
}