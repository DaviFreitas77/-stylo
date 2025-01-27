import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Produto from './pages/Produto';
import { Provider as ReduxProvider } from 'react-redux';
import Header from './components/Header';
import { Provider } from './Contexto/provider';
import store from './store';
export const AppRoute = () => {
    return (
        <ReduxProvider store={store}>
            <Provider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Login' element={<SignIn />} />
                        <Route path='/produto/:id_produto' element={<Produto />} />
                    </Routes>

                </BrowserRouter>
            </Provider>
        </ReduxProvider>


    )
}