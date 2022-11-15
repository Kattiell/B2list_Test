import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './index.css'
import SignUp from './pages/SignUp';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode> {/*Traçar rotas de comunicação*/}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Página inicial da aplicação */}
        <Route path="/cadastre-se" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
