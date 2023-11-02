import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Usuários</h2>
      <ListGroup>
        {usuarios.map(usuario => (
          <ListGroup.Item key={usuario.id}>{usuario.nome}</ListGroup.Item>
        ))}
      </ListGroup>
      <Link to="/criar">
        <Button variant="primary" className="mt-3">
          Criar Novo Usuário
        </Button>
      </Link>
    </div>
  );
};

export default ListarUsuarios;
