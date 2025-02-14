import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';



import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Produto from './pages/Produto';
import { Provider as ReduxProvider } from 'react-redux';
import Header from './components/Header';
import { Context, Provider } from './Contexto/provider';
import store from './store';
import CriarProduto from './pages/Admin/Create';
import Erro from './pages/Erro';
import CheckOut from './pages/CheckOut';
import { useContext } from 'react';
export const AppRoute = () => {
    const adm = localStorage.getItem('token')
    const RotaPrivada = ({ isAdmin = false }) => {

        if (!adm) {
            return <Navigate to="/" replace />;
        }

        return <Outlet />;
    }
    return (
        <ReduxProvider store={store}>
            <Provider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Login' element={<SignIn />} />
                        <Route path='/produto/:id_produto' element={<Produto />} />
                        <Route path='/checkOut' element={<CheckOut/>}/>

                        <Route element={<RotaPrivada isAdmin={true} />}>
                            <Route path='/criarProduto' element={<CriarProduto />} />
                        </Route>

                        <Route path='*' element={<Erro />} />
                    </Routes>

                </BrowserRouter>
            </Provider>
        </ReduxProvider>


    )
}