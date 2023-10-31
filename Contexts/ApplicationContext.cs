using Microsoft.EntityFrameworkCore;

namespace CrudApi.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Usuarios = Set<Usuario>();
        }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}