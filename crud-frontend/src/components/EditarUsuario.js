import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditarUsuario = ({ match }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:7125/api/usuarios/${match.params.id}`)
      .then(response => {
        const usuario = response.data;
        setNome(usuario.nome);
        setEmail(usuario.email);
        setTelefone(usuario.telefone);
      })
      .catch(error => {
        console.error('Erro ao obter detalhes do usuário: ', error);
      });
  }, [match.params.id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    axios.put(`http://localhost:/api/usuarios/${match.params.id}`, {
      nome: nome,
      email: email,
      telefone: telefone
    })
      .then(response => {
        console.log('Usuário editado:', response.data);
      })
      .catch(error => {
        console.error('Erro ao editar usuário: ', error);
      });
  };

  return (
    <div>
      <h2>Editar Usuário</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Telefone:</label>
        <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
