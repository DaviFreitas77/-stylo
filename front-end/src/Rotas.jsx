import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
export const AppRoute =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<SignIn/>} />
            </Routes>
        
        </BrowserRouter>
    )
}