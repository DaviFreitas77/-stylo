import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Produto from './pages/Produto';
export const AppRoute =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<SignIn/>} />
                <Route path='/produto' element={<Produto/>} />
            </Routes>
        
        </BrowserRouter>
    )
}