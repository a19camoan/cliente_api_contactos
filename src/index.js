import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import ListaContactos from './ListaContactos';
import BorrarContacto from './BorrarContacto';
import CrearContacto from './CrearContacto';
import EditarContacto from './EditarContacto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/contactos" element={<ListaContactos />} />
                <Route path="/borrar/:id" element={<BorrarContacto />} />
                <Route path="/editar/:id" element={<EditarContacto />} />
                <Route path="/nuevo" element={<CrearContacto />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
