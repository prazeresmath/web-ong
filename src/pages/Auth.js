import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const toggleMode = () => setIsRegister(!isRegister);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const url = isRegister
  ? 'http://localhost:5000/register'
  : 'http://localhost:5000/login';


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert(response.data.message);
  
      // Salva o token no localStorage (opcional)
      if (!isRegister && response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log('Token recebido:', response.data.token);
      }
  
      setFormData({ nome: '', email: '', senha: '' });
    } catch (error) {
      console.error('Erro:', error.response?.data || error.message);
      alert(error.response?.data || 'Ocorreu um erro.');
    }
  };  

  return (
    <div>
      <h2>{isRegister ? 'Registrar' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        )}
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
        <button type="submit">{isRegister ? 'Registrar' : 'Login'}</button>
      </form>
      <button onClick={toggleMode}>
        {isRegister ? 'Já tem uma conta? Faça login' : 'Não tem conta? Registre-se'}
      </button>
    </div>
  );
};

export default Auth;