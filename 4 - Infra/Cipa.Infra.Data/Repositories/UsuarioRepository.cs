using Cipa.Domain.Entities;
using Cipa.Application.Repositories;
using Cipa.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using Cipa.Domain.Helpers;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using Microsoft.Extensions.Logging;

namespace Cipa.Infra.Data.Repositories
{
    public class UsuarioRepository : RepositoryBase<Usuario>, IUsuarioRepository
    {
        private ILogger<UsuarioRepository> logger;
        public UsuarioRepository(CipaContext db, ILogger<UsuarioRepository> logger) : base(db)
        {
            this.logger = logger;
        }

        public Usuario BuscarUsuario(string email, string senha)
        {
            return DbSet.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        public Usuario BuscarUsuario(string email)
        {
            return DbSet.FirstOrDefault(u => u.Email == email);
        }

        public Usuario BuscarUsuarioPeloCodigoRecuperacao(Guid codigo)
        {
            return DbSet.FirstOrDefault(u => u.CodigoRecuperacao == codigo);
        }

        public IEnumerable<Usuario> BuscarUsuariosAdministradores()
        {
            return DbSet.Where(u => u.Perfil == PerfilUsuario.Administrador);
        }

        public IEnumerable<Usuario> BuscarUsuariosPelaConta(int contaId)
        {
            return DbSet.Where(u => u.ContaId == contaId);
        }

        public async Task ResetarSenha(string email, string senha)
        {
            try
            {
                var sql = "update Usuarios set Senha = {0} where Email = {1};";
                await _db.Database.ExecuteSqlRawAsync(sql, senha, email);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Erro ao resetar senha.");
                throw;
            }
        }
    }
}