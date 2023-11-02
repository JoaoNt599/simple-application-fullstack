import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <h2>Criar Novo Usuário</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formTelefone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </Form.Group>

        <br />

        <Button variant="primary" type="submit">
          Criar
        </Button>
      </Form>

      <br />

      <Link to="/" className="btn btn-secondary">
        Início
      </Link>
    </div>
  );
};

export default CriarUsuario;
