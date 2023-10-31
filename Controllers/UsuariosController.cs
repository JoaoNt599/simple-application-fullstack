using Microsoft.AspNetCore.Mvc;
using CrudApi.Models;
using CrudApi.Repositories;

namespace CrudApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuarioRepository _usuarioRepository;

        public UsuariosController(UsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpGet]
        public IActionResult GetUsuarios()
        {
            var usuarios = _usuarioRepository.GetUsuarios();
            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public IActionResult GetUsuario(int id)
        {
            var usuario = _usuarioRepository.GetUsuarioById(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return Ok(usuario);
        }

        [HttpPost]
        public IActionResult AdicionarUsuario([FromBody] Usuario usuario)
        {
            _usuarioRepository.AdicionarUsuario(usuario);
            return CreatedAtAction(nameof(GetUsuario), new { id = usuario.Id }, usuario);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarUsuario(int id, [FromBody] Usuario usuario)
        {
            var usuarioExistente = _usuarioRepository.GetUsuarioById(id);
            if (usuarioExistente == null)
            {
                return NotFound();
            }

            usuarioExistente.Nome = usuario.Nome;
            usuarioExistente.Email = usuario.Email;
            usuarioExistente.Telefone = usuario.Telefone;

            _usuarioRepository.AtualizarUsuario(usuarioExistente);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarUsuario(int id)
        {
            var usuarioExistente = _usuarioRepository.GetUsuarioById(id);
            if (usuarioExistente == null)
            {
                return NotFound();
            }
            _usuarioRepository.DeletarUsuario(id);
            return NoContent();
        }
    }
}