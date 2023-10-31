import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7125/api/usuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter usuários: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListarUsuarios;
