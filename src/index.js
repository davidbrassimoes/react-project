import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import Linhas from './pages/Linhas';
import Estacoes from './pages/Estacoes';
import NotFound from './pages/NotFound';
import Favoritos from './pages/Favoritos';
import Estacao from './pages/Estacao';
import 'leaflet/dist/leaflet.css'
import Linha from './pages/Linha';
import LinhaDia from './pages/LinhaDia';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='favoritos' element={<Favoritos />} />
          <Route path='estacoes' element={<Estacoes />} />
          <Route path=':stop_id' element={<Estacao />} />
          <Route path='linhas' element={<Linhas />} />
          <Route path='linhas/:l' element={<Linha />} />
          <Route path='linhas/:l/:d' element={<LinhaDia />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
