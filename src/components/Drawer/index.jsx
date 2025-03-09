import React, { useState } from "react";
import './style.css';
import { IoCloseSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMicOutline } from "react-icons/io5";
import { MdOutlineMicOff } from "react-icons/md";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
export default function DrawerSearch({ showDrawer, setShowDrawer }) {
    const [termo, setTermo] = useState('')
    const [produto, setProduto] = useState([])
    const navigate = useNavigate()

    const pesquisa = async (valor) => {


        if (valor.length > 0) {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/pesquisa?pesquisa_produto=${valor}`)

                const data = await response.json();
                setProduto(data)
            

            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleInputChange = (e) => {
        pesquisa(e.target.value)
        setTermo(e.target.value)
    }

    // const voiceSearch = (transcript) => {
    //     pesquisa(transcript)
    //     resetTranscript();

    // }
    // const {
    //     transcript,
    //     listening,
    //     resetTranscript,
    //     browserSupportsSpeechRecognition
    // } = useSpeechRecognition();

    return (
        <div className="container-drawer">
            <div className={showDrawer ? 'openDrawer' : 'closeDrawer'}>
                <div className="div-input-drawer">

                    <input
                        className="inputSearch"
                        type="text"
                        placeholder="ex:camiseta"
                        value={termo}
                        onChange={handleInputChange}

                    />

                   

                </div>
                {/* {transcript ? (
                    <button onClick={() => voiceSearch(transcript)}>
                        <IoSearch size={25} />
                    </button>
                ) : null} */}
                <button onClick={() => setShowDrawer(false)}> <IoCloseSharp size={35} /></button>

            </div>
            <section className="container-card-drawer">
                {produto.length > 0 ? produto.map((item, index) => (
                    <button
                        onClick={() => navigate(`/produto/${item.id_produto}`)}
                        key={index}
                        className="card-drawer">
                        <div >
                            <img className="img-roupa-drawer" src={item.imagem_produto} alt="" />
                        </div>
                        <p className="nome-card">{item.nome_produto}</p>
                        <p className="preco-card">{item.preco_produto}</p>
                    </button>
                )) : (
                    <p>pesquisa ai</p>
                )}

            </section>


        </div>
    );
}