import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CasdastroVideo from './pages/cadastro/Video/index.jsx';
import CasdastroCategoria from './pages/cadastro/Categoria/index.jsx';

let MinhaSobre = ()=>{
  return (
    <h1> Minha Sobre</h1>
  )
}

let PageErro = ()=>{
  return(
    <h1>ERRO 404 </h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/pages/cadastro" Component={CasdastroVideo}/>
        <Route path="/pages/categoria" element={<CasdastroCategoria/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
