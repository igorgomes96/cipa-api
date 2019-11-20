using System.Collections.Generic;
using System.Linq;
using Cipa.Application.Interfaces;
using Cipa.Domain.Entities;
using Cipa.Domain.Exceptions;
using Cipa.Domain.Interfaces.Services;

namespace Cipa.Application
{
    public class EleicaoAppService : AppServiceBase<Eleicao>, IEleicaoAppService
    {
        private readonly IEleicaoService _eleicaoService;
        private readonly IUsuarioService _usuarioService;
        private readonly IEstabelecimentoService _estabelecimentoService;
        private readonly IContaService _contaService;
        private readonly IGrupoService _grupoService;

        public EleicaoAppService(
            IEleicaoService eleicaoService,
            IEstabelecimentoService estabelecimentoService,
            IUsuarioService usuarioService,
            IContaService contaService,
            IGrupoService grupoService) : base(eleicaoService)
        {
            _eleicaoService = eleicaoService;
            _usuarioService = usuarioService;
            _estabelecimentoService = estabelecimentoService;
            _contaService = contaService;
            _grupoService = grupoService;
        }

        public override Eleicao Adicionar(Eleicao eleicao)
        {
            // eleicao.Estabelecimento = _estabelecimentoService.BuscarPeloId(eleicao.EstabelecimentoId);
            // if (eleicao.Estabelecimento == null)
            //     throw new NotFoundException($"Estabelecimento {eleicao.EstabelecimentoId} não encontrado.");
            // eleicao.Conta = _contaService.BuscarPeloId(eleicao.ContaId);
            // eleicao.Grupo = _grupoService.BuscarPeloId(eleicao.GrupoId);
            // if (eleicao.Grupo == null)
            //     throw new NotFoundException($"Grupo {eleicao.GrupoId} não encontrado.");
            return base.Adicionar(eleicao);
        }

        public override void Atualizar(Eleicao eleicao) => base.Atualizar(eleicao);

        public IEnumerable<EtapaCronograma> BuscarCronograma(int eleicaoId)
        {
            var eleicao = _eleicaoService.BuscarPeloId(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            return eleicao.Cronograma.OrderBy(e => e.Ordem);
        }

        public IEnumerable<Eleitor> BuscarEleitores(int eleicaoId) =>
            _eleicaoService.BuscarEleitores(eleicaoId).OrderBy(e => e.Nome);

        public Eleitor BuscarEleitorPeloIdUsuario(int eleicaoId, int usuarioId)
        {
            var eleicao = _eleicaoService.BuscarPeloIdCarregarEleitores(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            return eleicao.BuscarEleitorPeloIdUsuario(usuarioId);
        }

        public IEnumerable<Inscricao> BuscarInscricoes(int eleicaoId, StatusInscricao? status = null) =>
            _eleicaoService.BuscarInscricoes(eleicaoId, status);

        public Inscricao BuscarInscricaoPeloUsuario(int eleicaoId, int usuarioId)
        {
            var usuario = _usuarioService.BuscarPeloId(usuarioId);
            if (usuario == null) throw new CustomException("Usuário inválido!");
            return _eleicaoService.BuscarInscricaoPeloUsuario(eleicaoId, usuario);
        }

        public IEnumerable<Eleicao> BuscarPelaConta(int contaId)
        {
            var conta = _contaService.BuscarPeloId(contaId);
            if (conta == null) throw new CustomException("Conta inválida!");
            return _eleicaoService.BuscarPelaConta(conta);
        }

        public IEnumerable<Eleicao> BuscarPeloUsuario(int usuarioId)
        {
            var usuario = _usuarioService.BuscarPeloId(usuarioId);
            if (usuario == null) throw new CustomException("Usuário inválido!");
            return _eleicaoService.BuscarPeloUsuario(usuario);
        }

        public bool ExcluirEleitor(int eleicaoId, int eleitorId)
        {
            var eleicao = _eleicaoService.BuscarPeloIdCarregarTodoAgregado(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            return _eleicaoService.ExcluirEleitor(eleicao, eleitorId);
        }

        public Eleicao PassarParaProximaEtapa(int eleicaoId)
        {
            var eleicao = _eleicaoService.BuscarPeloId(eleicaoId);
            return _eleicaoService.PassarParaProximaEtapa(eleicao);
        }

        public Eleitor AdicionarEleitor(int eleicaoId, Eleitor eleitor)
        {
            var eleicao = _eleicaoService.BuscarPeloIdCarregarEleitores(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            return _eleicaoService.AdicionarEleitor(eleicao, eleitor);
        }

        public Inscricao FazerInscricao(int eleicaoId, int usuarioId, string objetivos)
        {
            var eleicao = _eleicaoService.BuscarPeloIdCarregarEleitores(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            var eleitor = eleicao.BuscarEleitorPeloIdUsuario(usuarioId);
            if (eleitor == null) throw new NotFoundException("Eleitor não encontrado.");
            return _eleicaoService.FazerInscricao(eleicao, eleitor, objetivos);
        }

        public Inscricao AtualizarInscricao(int eleicaoId, int usuarioId, string objetivos)
        {
            var eleicao = _eleicaoService.BuscarPeloIdCarregarEleitores(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            var eleitor = eleicao.BuscarEleitorPeloIdUsuario(usuarioId);
            if (eleitor == null) throw new NotFoundException("Eleitor não encontrado.");
            return _eleicaoService.AtualizarInscricao(eleicao, eleitor, objetivos);
        }

        public Inscricao AprovarInscricao(int eleicaoId, int inscricaoId, int usuarioId)
        {
            var eleicao = _eleicaoService.BuscarPeloIdCarregarEleitores(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            var usuarioAprovador = _usuarioService.BuscarPeloId(usuarioId);
            if (usuarioAprovador == null) throw new NotFoundException("Usuário inválido.");
            return _eleicaoService.AprovarInscricao(eleicao, inscricaoId, usuarioAprovador);
        }

        public Inscricao ReprovarInscricao(int eleicaoId, int inscricaoId, int usuarioId, string motivoReprovacao)
        {
            var eleicao = _eleicaoService.BuscarPeloIdCarregarEleitores(eleicaoId);
            if (eleicao == null) throw new NotFoundException("Eleição não encontrada.");
            var usuarioAprovador = _usuarioService.BuscarPeloId(usuarioId);
            if (usuarioAprovador == null) throw new NotFoundException("Usuário inválido.");
            return _eleicaoService.ReprovarInscricao(eleicao, inscricaoId, usuarioAprovador, motivoReprovacao);
        }

    }
}