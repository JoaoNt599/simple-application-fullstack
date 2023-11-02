import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    axios.put(`http://localhost:7125/api/usuarios/${match.params.id}`, {
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
    <div className="container mt-5">
      <h2>Editar Usuário</h2>
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

        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>

      <br />

      <Link to="/" className="btn btn-secondary">
        Menu
      </Link>
    </div>
  );
};

export default EditarUsuario;
