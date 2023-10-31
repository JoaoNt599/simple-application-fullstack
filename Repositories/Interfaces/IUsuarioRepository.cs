using System.Collections.Generic;
using CrudApi.Models;

namespace CrudApi.Repositories.Interfaces
{
    public interface IUsuarioRepository
    {
        IEnumerable<Usuario> GetUsuarios();
        Usuario GetUsuarioById(int id);
        void AdicionarUsuario(Usuario usuario);
        void AtualizarUsuario(Usuario usuario);
        void DeletarUsuario(int id);
    }
}
