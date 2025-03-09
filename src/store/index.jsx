import {applyMiddleware, createStore} from 'redux'
import rootReducer from './modules/rootReducer'
import { thunk } from "redux-thunk"; // para usar o async nas actions


const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;