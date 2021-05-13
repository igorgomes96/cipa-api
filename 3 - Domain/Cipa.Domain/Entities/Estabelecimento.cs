using Cipa.Domain.Exceptions;
using Cipa.Domain.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Cipa.Domain.Entities
{
    public class Estabelecimento : Entity<int>
    {
        public Estabelecimento(string cidade, string endereco, int empresaId)
        {
            Cidade = cidade;
            Endereco = endereco;
            EmpresaId = empresaId;
            Ativo = true;
        }
        public string Cidade { get; set; }
        public string Endereco { get; set; }
        public string Descricao { get; set; }
        public int? GrupoId { get; set; }
        public int EmpresaId { get; set; }
        public bool Ativo { get; private set; }
        public DateTime DataCadastro { get; private set; }

        public virtual Empresa Empresa { get; set; }
        public virtual Grupo Grupo { get; set; }
        public virtual ICollection<Eleicao> Eleicoes { get; private set; } = new List<Eleicao>();


        public List<Eleicao> EleicoesDoAnoCorrente
        {
            get => Eleicoes.Where(e => (e.DataFinalizacao.HasValue && e.DataFinalizacao.Value.Year == DateTime.Now.HorarioBrasilia().Date.Year) ||
                e.DataInicio.Year == DateTime.Now.HorarioBrasilia().Date.Year).ToList();
        }

        public List<Eleicao> EleicoesEmAndamento { get => Eleicoes.Where(e => !e.DataFinalizacao.HasValue).ToList(); }

        public void Inativar()
        {
            if (EleicoesDoAnoCorrente.Any() || EleicoesEmAndamento.Any())
                throw new CustomException("Somente um estabelecimento que não tenha nenhuma eleição em andamento ou no ano corrente pode ser excluído.");
            Ativo = false;
        }

    }
}