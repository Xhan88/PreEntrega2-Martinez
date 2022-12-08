import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import ItemListContainer from './contenedor/ItemListContainer.jsx';
import './components/NavBar.css'
import './contenedor/ItemListContainer.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemCount from './components/ItemCount';
import CartContainer from './contenedor/CartContainer/CartContainer';
// import ItemCount from './components/ItemCount'



ReactDOM.createRoot(document.getElementById('root')).render(

<>
    <BrowserRouter>
        <NavBar /> 
        <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'JUGUETONES'} /> } />
        <Route path='/detail/:productId' element={<ItemDetailContainer /> } />
        <Route path='/cart' element={<CartContainer /> } />

        <Route path='*' element={<Navigate to='/' />}/>
        {/* <ItemCount /> */}
        </Routes>
        {/* <CartContainer /> */}
    </BrowserRouter>   
</>    
    
)
