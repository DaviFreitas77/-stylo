import { produce } from "immer";
export default function carrinho(state = [], action) {
    switch (action.type) {
        case 'ADD_CARRINHO':
            return produce(state, draft => {
                const index = draft.findIndex(item => item.id_produto === action.item.id_produto && item.cor === action.item.cor && item.tamanho === action.item.tamanho);
                if (index >= 0) {
                    draft[index].quantidade += 1;

                } else {
                    draft.push({
                        ...action.item,
                        quantidade: 1,
                        preco_final: action.item.preco
                    })

                }
            });

        case 'LOAD_CARRINHO':
            return action.payload;


        case 'INCREMENT_CARRINHO':
            return produce(state, draft => {
                const index = draft.findIndex(item => item.id_produto === action.item.id_produto);

                if (index >= 0) {
                    draft[index].quantidade += 1;
                }
            });

        case 'DECREMENT_CARRINHO':
            return produce(state, draft => {
                const index = draft.findIndex(item => item.id_produto === action.item.id_produto);

                if (index >= 0 && draft[index].quantidade > 1) {
                    draft[index].quantidade -= 1;
                }
            })
        default:
            return state;
    }
    return [];

}