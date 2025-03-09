import React, { useContext, useEffect, useState } from "react";
import './style.css'
import { FaCircle } from "react-icons/fa";
import { Context } from "../../../Contexto/provider";
import { getDownloadURL, storage, uploadBytesResumable, ref } from "../../../Service/firebaseConexao";
export default function CriarProduto() {

    const [nome, setNome] = useState('')
    const [desc, setDesc] = useState('')
    const [categoria, setCategoria] = useState('')
    const [arrayCategoria, setArrayCategoria] = useState([])
    const [subCategoria, setSubCategoria] = useState('')
    const [arraySubcCategoria, setArraySubCategoria] = useState([])
    const [preco, setPreco] = useState('')
    const [precoAntigo, setPrecoAntigo] = useState('')
    const [arrayTamanho, setArrayTamanho] = useState([])
    const [tamanhosSelecionados, setTamanhosSelecionados] = useState([]);
    const [destaque, setDestaque] = useState('')
    const [estacao, setEstacao] = useState('')
    const [arrayCor, setArrayCor] = useState([])
    const [corSelecionado, setCorSelecionado] = useState([])
    const [image, SetImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const token = localStorage.getItem('token')

    const traducaoCores = {
        preto: "black",
        vermelho: "red",
        azul: "blue",
        branco: "white",
        amarelo: "yellow",
        verde: "green",
        rosa: 'pink'
    };

    const toggleCor = (cor) => {
        if (corSelecionado.includes(cor)) {
            setCorSelecionado(corSelecionado.filter(item => item !== cor))
        } else {
            setCorSelecionado([...corSelecionado, cor])
        }
    }


    const toggleTamanho = (tamanho) => {
        if (tamanhosSelecionados.includes(tamanho)) {
            setTamanhosSelecionados(tamanhosSelecionados.filter(item => item !== tamanho))
        } else {
            setTamanhosSelecionados([...tamanhosSelecionados, tamanho]);
        }
    }

    useEffect(() => {
        const fetchCategoria = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/getCategorias', {
                    method: 'GET',
                })
                const data = await response.json();

                setArrayCategoria(data)
            } catch (error) {
                console.log(error)
            }
        }

        const fetchSubCategoria = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/getSubCategorias', {
                    method: 'GET',
                })
                const data = await response.json();

                setArraySubCategoria(data)
            } catch (error) {
                console.log(error)
            }
        }
        const fetchTamanho = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/gettamanho', {
                    method: 'GET',
                })
                const data = await response.json();

                setArrayTamanho(data)
            } catch (error) {
                console.log(error)
            }
        }

        const fetchCores = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/getcor', {
                    method: 'GET',
                })
                const data = await response.json();
                setArrayCor(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategoria()
        fetchSubCategoria()
        fetchTamanho()
        fetchCores()
    }, [])


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            SetImage(file);
            uploadImagem(file)
        }
    };


    const uploadImagem = (file) => {
        const fileName = `${image.name}`

        const storafeRef = ref(storage, `produtos/${fileName}`)

        const uploadtask = uploadBytesResumable(storafeRef, file)

        uploadtask.then(() => {
            getDownloadURL(uploadtask.snapshot.ref).then((dowload) => {
                setImageUrl(dowload)
            })
        })
    }
    const cadastrarProduto = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/criarProduto', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    nome_produto: nome,
                    desc_produto: desc,
                    preco_produto: preco,
                    preco_antigo: precoAntigo,
                    destaque: destaque,
                    destaque_estacao: estacao,
                    imagem_produto: imageUrl,
                    fk_subCategoria: subCategoria,
                    tamanhos: tamanhosSelecionados,
                    cores: corSelecionado

                })
            })

            const data = await response.json()
            alert(data.message)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="containerCriarProduto">

            <div className="containerInput">
                <h1>Cadastrar Produto</h1>
                <input
                    type="text"
                    placeholder="nome"
                    onChange={(txt) => setNome(txt.target.value)}
                    className="inputProduto"
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição produto"
                    onChange={(txt) => setDesc(txt.target.value)}
                    className="inputProduto"
                    required
                />

                <select className="inputProduto" name="" id="" onChange={(e) => setSubCategoria(e.target.value)}>
                    <option disabled selected>SubCategoria</option>
                    {arraySubcCategoria.map((item, index) => (
                        <option key={index} value={item.id_subCategoria}>{item.nome_subCategoria}</option>
                    ))}

                </select>

                <div className="containerinputsPreco">
                    <input
                        type="number"
                        placeholder="Preço antigo"
                        onChange={(txt) => setPrecoAntigo(txt.target.value)}
                        className="inputProduto"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Novo preço"
                        onChange={(txt) => setPreco(txt.target.value)}
                        className="inputProduto"
                        required
                    />
                </div>
                <div className="containerinputsPreco">
                    <select className="inputProduto" name="" id="" onChange={(e) => setDestaque(e.target.value)}>
                        <option disabled selected>Produto destaque?</option>
                        <option value={1}>sim</option>
                        <option value={0}>não</option>
                    </select>
                    <select className="inputProduto" name="" id="" onChange={(e) => setEstacao(e.target.value)}>
                        <option disabled selected>coleção da estação do ano?</option>
                        <option value={1}>sim</option>
                        <option value={0}>não</option>
                    </select>

                </div>
                <div className="containerImgCreate">

                    <input type="file" onChange={handleImageChange} />
                    <img src={imageUrl} alt="" style={{ width: 400, marginTop: '20px' }} />
                </div>
                <div className="containerTamanhoECor">
                    <div className="containerBtnTamanho">
                        <h2>Selecione os tamanhos</h2>
                        <div>
                            {arrayTamanho.map((item, index) => (
                                <button
                                    onClick={() => toggleTamanho(item.id_tamanho)}
                                    className={`tamanhos ${tamanhosSelecionados.includes(item.id_tamanho) ? 'selected' : ''}`}
                                    key={index}>
                                    {item.desc_tamanho}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="containerBtnTamanho">
                        <h2>Selecione as cores disponiveis</h2>
                        <div>
                            {arrayCor.map((item, index) => (
                                <button
                                    onClick={() => toggleCor(item.id_cor)}
                                    className={` ${corSelecionado.includes(item.id_cor) ? 'selected' : ''}`}
                                    key={index}>
                                    <FaCircle color={traducaoCores[item.desc_cor]} size={45} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    onClick={cadastrarProduto}
                    className="btnProximo"
                >Próximo</button>
            </div>
        </div>
    );
}