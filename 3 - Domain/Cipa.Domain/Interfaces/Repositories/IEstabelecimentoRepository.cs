using System.Collections.Generic;
using Cipa.Domain.Entities;

namespace Cipa.Domain.Interfaces.Repositories {
    public interface IEstabelecimentoRepository: IRepositoryBase<Estabelecimento>
    {
        IEnumerable<Estabelecimento> BuscarEstabelecimentosPorConta(int contaId);
        IEnumerable<Estabelecimento> BuscarEstabelecimentosPorEmpresa(int empresaId);
    }
}