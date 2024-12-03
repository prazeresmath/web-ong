import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VagasDisponiveis = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/vagas');
        setVagas(response.data);
      } catch (error) {
        console.error('Erro ao buscar vagas:', error);
      }
    };

    fetchVagas();
  }, []);

  return (
    <div>
      <h2>Vagas Disponíveis</h2>
      {vagas.length > 0 ? (
        <ul>
          {vagas.map((vaga) => (
            <li key={vaga.id}>
              <h3>{vaga.titulo}</h3>
              <p>{vaga.descricao}</p>
              <p><strong>Local:</strong> {vaga.local}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma vaga disponível no momento.</p>
      )}
    </div>
  );
};

export default VagasDisponiveis;