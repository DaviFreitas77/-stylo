import { combineReducers } from "redux";

import carrinho from "./carrinho/reducer";
import favorito from "./Favorito/reducerFavorito";

export default combineReducers({
    carrinho,
    favorito
})