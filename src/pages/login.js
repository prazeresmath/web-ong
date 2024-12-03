import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      alert('Login bem-sucedido!');
      
      // Salvar token ou estado de login
      localStorage.setItem('authToken', response.data.token);
  
      // Redirecionar para a tela inicial
      navigate('/home');
    } catch (error) {
      const errorMessage = error.response?.data || 'Erro no login.';
      alert(errorMessage);
      console.error('Erro no login:', errorMessage);
    }
  };  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;