import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroVaga from './pages/cadastroVagas';
import VagasDisponiveis from './pages/vagasDisponiveis';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro-vaga" element={<CadastroVaga />} />
        <Route path="/vagas" element={<VagasDisponiveis />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;