namespace CrudApi.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }

        public Usuario()
        {
            Id = 0;
            Nome = string.Empty;
            Email = string.Empty;
            Telefone = string.Empty;
        }
    }
}
