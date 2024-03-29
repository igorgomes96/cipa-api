using AutoMapper;
using AutoMapper.QueryableExtensions;
using Cipa.Application.Interfaces;
using Cipa.Domain.Entities;
using Cipa.WebApi.Authentication;
using Cipa.WebApi.Filters;
using Cipa.WebApi.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Cipa.WebApi.Controllers
{
    [Authorize(PoliticasAutorizacao.UsuarioSESMT)]
    [Route("api/[controller]")]
    [ApiController]
    public class EstabelecimentosController : Controller
    {
        private readonly IEstabelecimentoAppService _estabelecimentoAppService;
        private readonly IMapper _mapper;
        public EstabelecimentosController(IEstabelecimentoAppService estabelecimentoAppService, IMapper mapper)
        {
            _estabelecimentoAppService = estabelecimentoAppService;
            _mapper = mapper;
        }

        [HttpGet]
        [Pagination]
        public IEnumerable<EstabelecimentoViewModel> GetEstabelecimentos(int? empresaId = null)
        {
            IQueryable<Estabelecimento> estabelecimentos = null;
            if (empresaId.HasValue)
                estabelecimentos = _estabelecimentoAppService.BuscarEstabelecimentosPorEmpresa(empresaId.Value).AsQueryable();
            else
                estabelecimentos = _estabelecimentoAppService.BuscarEstabelecimentosPorConta(ContaId).AsQueryable();

            return estabelecimentos.ProjectTo<EstabelecimentoViewModel>(_mapper.ConfigurationProvider);
        }

        [HttpGet("{id}")]
        public EstabelecimentoViewModel GetEstabelecimento(int id) =>
            _mapper.Map<EstabelecimentoViewModel>(_estabelecimentoAppService.BuscarPeloId(id));

        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        [HttpPost]
        public EstabelecimentoViewModel PostEstabelecimento(EstabelecimentoViewModel estabelecimento)
        {
            var novoEstabelecimento = _mapper.Map<Estabelecimento>(estabelecimento);
            return _mapper.Map<EstabelecimentoViewModel>(_estabelecimentoAppService.Adicionar(novoEstabelecimento));
        }

        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        [HttpPut("{id}")]
        public IActionResult PutEstabelecimento(int id, EstabelecimentoViewModel estabelecimento)
        {
            estabelecimento.Id = id;
            _estabelecimentoAppService.Atualizar(_mapper.Map<Estabelecimento>(estabelecimento));
            return NoContent();
        }

        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        [HttpDelete("{id}")]
        public EstabelecimentoViewModel DeleteEstabelecimento(int id) =>
            _mapper.Map<EstabelecimentoViewModel>(_estabelecimentoAppService.Excluir(id));
    }
}