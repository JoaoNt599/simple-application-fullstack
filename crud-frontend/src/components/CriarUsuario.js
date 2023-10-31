import React, { useState } from 'react';
import axios from 'axios';

const CriarUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:7125/api/usuarios', {
      nome: nome,
      email: email,
      telefone: telefone
    })
      .then(response => {
        console.log('Novo usuário criado:', response.data);
        setNome('');
        setEmail('');
        setTelefone('');
      })
      .catch(error => {
        console.error('Erro ao criar usuário: ', error);
      });
  };

  return (
    <div>
      <h2>Criar Novo Usuário</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Telefone:</label>
        <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CriarUsuario;
