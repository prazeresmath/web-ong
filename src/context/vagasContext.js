import React, { createContext, useState } from 'react';

// Cria o contexto
export const VagasContext = createContext();

// Provedor do contexto
export const VagasProvider = ({ children }) => {
  const [vagas, setVagas] = useState([]);

  // Função para adicionar uma nova vaga
  const adicionarVaga = (vaga) => {
    setVagas((prevVagas) => [...prevVagas, vaga]);
  };

  return (
    <VagasContext.Provider value={{ vagas, adicionarVaga }}>
      {children}
    </VagasContext.Provider>
  );
};
