import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove o token de autenticação do localStorage
    localStorage.removeItem('authToken');

    // Redireciona o usuário para a tela de login
    navigate('/');
  };

  return (
    <div>
      <h1>Bem-vindo ao Sistema de Voluntariado</h1>
      <nav>
        <ul>
          <li><Link to="/cadastro-vaga">Cadastrar Vaga</Link></li>
          <li><Link to="/vagas">Ver Vagas Disponíveis</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Home;