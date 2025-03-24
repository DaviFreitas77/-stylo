import React, { useState } from "react";
import './style.css'
import { FaCircle } from "react-icons/fa";
import { getDownloadURL, storage, uploadBytesResumable, ref } from "../../../Service/firebaseConexao";
import { loadColor, loadSizes, loadSubCategory } from "../../../Hooks/createProduct";
import { useForm } from "react-hook-form";
export default function CriarProduto() {
    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            cores: [],
            tamanhos: []
        }
    })


    const { subCategory, isLoading, error } = loadSubCategory()
    const { size, isLoadingSize, errorSize } = loadSizes()
    const { color, isLoadingColor, errorColor } = loadColor()

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
        let coresAtuais = watch("cores") || [];
        if (coresAtuais.includes(cor)) {
            coresAtuais = coresAtuais.filter(item => item !== cor);
        } else {
            coresAtuais.push(cor)
        }

        setValue("cores", coresAtuais);
    }


    const toggleTamanho = (tamanho) => {
        let tamanhosAtuais = watch("tamanhos") || [];
        if (tamanhosAtuais.includes(tamanho)) {
            tamanhosAtuais = tamanhosAtuais.filter(item => item !== tamanho)
        } else {
            tamanhosAtuais.push(tamanho)
        }


        setValue("tamanhos", tamanhosAtuais)
    }


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
    const cadastrarProduto = async (data) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/criarProduto', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

                body: JSON.stringify({
                    nome_produto: data.nome,
                    desc_produto: data.desc,
                    preco_produto: data.novoPreco,
                    preco_antigo: data.precoAntigo,
                    destaque: data.destaque,
                    destaque_estacao: data.estacaoAno,
                    imagem_produto: imageUrl,
                    fk_subCategoria: data.subCategoria,
                    tamanhos: data.tamanhos,
                    cores: data.cores

                })
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data)
            }

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="containerCriarProduto">


            <h1>Cadastrar Produto</h1>
            <form className="form" onSubmit={handleSubmit(cadastrarProduto)}>
                <div className="d-flex w-100 gap-3">
                    <div className="containerInput">
                        <input
                            {...register("nome", { required: "nome obrigatório" })}
                            type="text"
                            placeholder="nome"
                            className="inputProduto"
                        />
                        {errors.nome && <p className="error fs-6 text">{errors.nome.message}</p>}
                    </div>
                    <div className="containerInput">
                        <input
                            {...register("desc", { required: "descrição obrigatória" })}
                            type="text"
                            placeholder="Descrição produto"
                            name="desc"
                            className="inputProduto"
                        />
                        {errors.desc && <p className="error fs-6 text">{errors.desc.message}</p>}
                    </div>
                </div>
                <div className="d-flex w-100 gap-3">


                    <div className="containerInput">
                        <input
                            {...register("precoAntigo")}
                            type="number"
                            placeholder="Preço antigo"
                            name="precoAntigo"
                            className="inputProduto"
                        />
                    </div>
                    <div className="containerInput">
                        <input
                            {...register("novoPreco", { required: "preco obrigatótio" })}
                            type="number"
                            placeholder="Novo preço"
                            name="novoPreco"
                            className="inputProduto"
                        />
                        {errors.novoPreco && <p className="error fs-6 text">{errors.novoPreco.message}</p>}
                    </div>

                </div>
                <div className="d-flex w-100 gap-3">

                    <select
                        {...register("destaque", { required: "escolha se o produto é destaque" })}
                        className="inputProduto"
                        name="destaque"
                    >
                        <option defaultValue >escolha se o Produto é destaque?</option>
                        <option value={1}>sim</option>
                        <option value={0}>não</option>
                    </select>
                    <select
                        {...register("estacaoAno", { required: "escolha se é coleção da estação do ano" })}
                        className="inputProduto"
                        name="estacaoAno"
                    >
                        <option defaultValue > coelção de estacão do ano?</option>
                        <option value={1}>sim</option>
                        <option value={0}>não</option>
                    </select>

                </div>
                <div className="w-100 d-flex gap-3" >
                    <div className="containerInput">
                        <select
                            {...register("subCategoria", { required: "escolha a subCategoria" })}
                            className="inputProduto w-48"
                            name="subCategoria" >
                            <option defaultValue >SubCategoria</option>
                            {subCategory?.map((item, index) => (
                                <option key={index} value={item.id_subCategoria}>{item.nome_subCategoria}</option>
                            ))}
                        </select>
                        {errors.subCategoria && <p className="error fs-6 text">{errors.subCategoria.message}</p>}
                    </div>

                    <div className="containerImgCreate">
                        <input
                            className="inputProduto"
                            name="image"
                            type="file"
                            onChange={handleImageChange} />
                        <img src={imageUrl} alt="" style={{ width: 300, marginTop: '20px' }} />
                    </div>

                </div>



                <div className="containerTamanhoECor">
                    <div className="containerBtnTamanho">
                        <h2>Selecione os tamanhos</h2>
                        <div>
                            {size?.map((item, index) => (
                                <button
                                    type="button"
                                    onClick={() => toggleTamanho(item.id_tamanho)}
                                    className={`tamanhos ${watch('tamanhos')?.includes(item.id_tamanho) ? 'selected' : ''}`}
                                    key={index}>
                                    {item.desc_tamanho}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="containerBtnTamanho">
                        <h2>Selecione as cores disponiveis</h2>
                        <div>
                            {color?.map((item, index) => (
                                <button
                                    type="button"
                                    onClick={() => toggleCor(item.id_cor)}
                                    className={` ${watch('cores')?.includes(item.id_cor) ? 'selected' : ''}`}
                                    key={index}>
                                    <FaCircle color={traducaoCores[item.desc_cor]} size={45} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    type='submit'
                    className="btnProximo"
                >Próximo</button>
            </form>

        </div>

    );
}