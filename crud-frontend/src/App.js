import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListarUsuarios from './components/ListarUsuarios';
import CriarUsuario from './components/CriarUsuario';
import EditarUsuario from './components/EditarUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Cadastro de Usuários</h1>
        <Routes>
          <Route path="/" element={<ListarUsuarios />} />
          <Route path="/criar" element={<CriarUsuario />} />
          <Route path="/editar/:id" element={<EditarUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
