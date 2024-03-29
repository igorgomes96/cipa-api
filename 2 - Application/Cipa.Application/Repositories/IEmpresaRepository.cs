using Cipa.Domain.Entities;
using System.Collections.Generic;

namespace Cipa.Application.Repositories
{
    public interface IEmpresaRepository : IRepositoryBase<Empresa>
    {
        IEnumerable<Empresa> BuscarEmpresasPorConta(int contaId, bool? ativa = true);
    }
}