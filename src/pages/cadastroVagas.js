import React, { useState } from 'react';
import axios from 'axios';

const CadastroVaga = () => {
  const [vaga, setVaga] = useState({
    titulo: '',
    descricao: '',
    local: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVaga({ ...vaga, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/vagas', vaga);
      alert('Vaga cadastrada com sucesso!');
      setVaga({ titulo: '', descricao: '', local: '' });
      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao cadastrar vaga:', error);
      alert('Erro ao cadastrar vaga.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Vaga</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          value={vaga.titulo}
          onChange={handleChange}
          placeholder="Título da vaga"
          required
        />
        <textarea
          name="descricao"
          value={vaga.descricao}
          onChange={handleChange}
          placeholder="Descrição da vaga"
          required
        />
        <input
          type="text"
          name="local"
          value={vaga.local}
          onChange={handleChange}
          placeholder="Local da vaga"
          required
        />
        <button type="submit">Cadastrar Vaga</button>
      </form>
    </div>
  );
};

export default CadastroVaga;