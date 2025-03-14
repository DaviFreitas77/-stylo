import { produce } from "immer";

export default function favorito(state = [], action) {
   

    switch (action.type) {
        case 'ADD_FAVORITO':
            return produce(state, draft => {
                const index = draft.findIndex(item => item.id_produto === action.item.id_produto);
                if (index === -1) {  // Produto não encontrado
                    draft.push(action.item);  // Adiciona o item
                } else {
                    alert("Produto já está nos favoritos!");  // Produto já existe
                }
            });

        case 'LOAD_FAVORITO':
            return action.payload
        default:
            return state || [];
    }
}
