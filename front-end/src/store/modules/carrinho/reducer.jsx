import { produce } from "immer";
export default function carrinho(state = [], action) {
    console.log(state)
    switch (action.type) {
        case 'ADD_CARRINHO':
            return produce(state, draft => {
                const index = draft.findIndex(item => item.id_produto === action.item.id_produto);
                if (index >= 0) {
                    draft[index].Qtd += 1;
                } else {
                    draft.push({
                        ...action.item,
                        Qtd:1
                    })

                }
            });
        case 'INCREMENT_CARRINHO':
            return produce(state,draft =>{
                const index = draft.findIndex(item =>item.id_produto === action.item.id_produto);

                if(index >= 0){
                    draft[index].Qtd += 1;
                }
            });

        case 'DECREMENT_CARRINHO':
            return produce(state,draft=>{
                const index = draft.findIndex(item =>item.id_produto === action.item.id_produto);

                if (index >= 0 && draft[index].Qtd > 1) { 
                    draft[index].Qtd -= 1;  
                }
            })
        default:
            return state;
    }
    return [];
}