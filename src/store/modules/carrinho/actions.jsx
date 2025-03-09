export const addCarrinho = (item, idCarrinho, idUsuario, quantidade, idCor, idTamanho, selectCor, selectTamanho) => {
    return async (dispatch) => {

        try {
            const response = await fetch('http://127.0.0.1:8000/api/addCarrinho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    id_usuario: idUsuario,
                    id_carrinho: idCarrinho,
                    id_produto: item.id_produto,
                    quantidade: quantidade,
                    id_cor: idCor,
                    id_tamanho: idTamanho,
                    preco_produto: item.preco_produto


                }),
            })
            if (response.ok) {
                console.log('Produto adicionado ao carrinho com sucesso!');

                console.log(item)
                dispatch({
                    type: 'ADD_CARRINHO',
                    item: {
                        ...item,
                        tamanho: selectTamanho,
                        cor: selectCor,
                        quantidade: quantidade,
                        preco: item.preco_produto
                    },
                });
            } else {
                const errorData = await response.json();
                console.error('Erro ao adicionar item ao carrinho:', errorData);

            }
        } catch (error) {
            console.log(error)

        }
    }
}


export const incrementCarrinhho = (idCarrinho, item, idUsuario) => {
    return async (dispatch) => {

        try {
            const response = await fetch('http://127.0.0.1:8000/api/addCarrinho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_produto: item.id_produto,
                    quantidade: 1,
                    id_carrinho: idCarrinho,
                    id_cor: item.id_cor,
                    id_tamanho: item.id_tamanho,
                    preco_produto: item.preco_produto,
                    id_usuario: idUsuario
                })
            })
            if (response.ok) {
                dispatch({
                    type: 'INCREMENT_CARRINHO',
                    item
                });
            }


        } catch (error) {
            console.log(error)
        }
    }
}


export const decrementCarrinho = (item, idCarrinho) => {
    return async (dispatch) => {

        try {
            const response = await fetch('http://127.0.0.1:8000/api/decrement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id_produto: item.id_produto, id_carrinho: idCarrinho })
            })
            

            if (response.ok) {
                dispatch({
                    type: 'DECREMENT_CARRINHO',
                    item
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
}