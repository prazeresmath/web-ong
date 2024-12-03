import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idade = calcularIdade(formData.dataNascimento);
    if (idade < 14) {
      alert('Você deve ter pelo menos 14 anos para se registrar.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data.message || 'Usuário registrado com sucesso!');
      navigate('/'); // Redireciona para a tela de login
    } catch (error) {
      const errorMessage = error.response?.data || 'Erro ao registrar.';
      alert(errorMessage);
      console.error('Erro ao registrar usuário:', errorMessage);
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
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
        <input
          type="date"
          name="dataNascimento"
          placeholder="Data de Nascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;