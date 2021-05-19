using AutoMapper;
using AutoMapper.QueryableExtensions;
using Cipa.Application.Interfaces;
using Cipa.Domain.Entities;
using Cipa.Domain.Helpers;
using Cipa.WebApi.Authentication;
using Cipa.WebApi.Filters;
using Cipa.WebApi.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cipa.WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : Controller
    {
        private readonly IUsuarioAppService _usuarioAppService;
        private readonly IMapper _mapper;
        public UsuariosController(IUsuarioAppService usuarioAppService, IMapper mapper)
        {
            _usuarioAppService = usuarioAppService;
            _mapper = mapper;
        }

        [HttpGet]
        [Pagination]
        [Authorize(PoliticasAutorizacao.UsuarioSESMT)]
        public IEnumerable<UsuarioViewModel> GetUsuarios() =>
            _usuarioAppService.BuscarUsuariosPelaConta(ContaId).AsQueryable().ProjectTo<UsuarioViewModel>(_mapper.ConfigurationProvider);

        [HttpGet("administradores")]
        [Authorize(Roles = PerfilUsuario.Administrador)]
        public IEnumerable<UsuarioViewModel> GetUsuariosAdministradores() =>
            _usuarioAppService.BuscarUsuariosAdministradores().AsQueryable().ProjectTo<UsuarioViewModel>(_mapper.ConfigurationProvider);

        [HttpPut("redefinirsenha")]
        [Authorize(Roles = PerfilUsuario.Administrador)]
        public async Task<IActionResult> PutRedefinirSenha(UsuarioRedefinirSenhaViewModel usuario)
        {
            var novaSenha = CryptoService.ComputeSha256Hash(usuario.Senha);
            await _usuarioAppService.RedefinirSenha(usuario.Email, novaSenha);
            return NoContent();
        }

        [HttpGet("logado")]
        public ActionResult<UsuarioViewModel> GetUsuarioLogado() =>
            _mapper.Map<UsuarioViewModel>(_usuarioAppService.BuscarPeloId(UsuarioId));

        [HttpGet("{id}")]
        public ActionResult<UsuarioViewModel> GetUsuario(int id)
        {
            var usuario = _usuarioAppService.BuscarPeloId(id);
            if (usuario.ContaId.HasValue && usuario.ContaId.Value != ContaId)
                return Forbid();
            return _mapper.Map<UsuarioViewModel>(_usuarioAppService.BuscarPeloId(id));
        }

        [HttpPost]
        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        public UsuarioViewModel PostUsuario(UsuarioViewModel usuario)
        {
            var novoUsuario = _mapper.Map<Usuario>(usuario);
            novoUsuario.ContaId = ContaId;
            novoUsuario.Perfil = PerfilUsuario.SESMT;  // A criação manual de usuário somente acontece para usuários do SESMT
            return _mapper.Map<UsuarioViewModel>(_usuarioAppService.Adicionar(novoUsuario));
        }

        [HttpPost("administradores")]
        [Authorize(Roles = PerfilUsuario.Administrador)]
        public UsuarioViewModel PostUsuarioAdministrador(UsuarioViewModel usuario)
        {
            var novoUsuario = _mapper.Map<Usuario>(usuario);
            novoUsuario.Perfil = PerfilUsuario.Administrador;
            return _mapper.Map<UsuarioViewModel>(_usuarioAppService.AdicionarAdministrador(novoUsuario));
        }



        [HttpPut("{id}")]
        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        public IActionResult PutUsuario(int id, UsuarioViewModel usuarioViewModel)
        {
            var usuario = _mapper.Map<Usuario>(usuarioViewModel);
            usuario.Id = id;
            usuario.ContaId = ContaId;
            usuario.Perfil = PerfilUsuario.SESMT;
            _usuarioAppService.Atualizar(usuario);
            return NoContent();
        }

        [HttpPut("{id}/administradores")]
        [Authorize(Roles = PerfilUsuario.Administrador)]
        public IActionResult PutUsuarioAdministrador(int id, UsuarioViewModel usuarioViewModel)
        {
            var usuario = _mapper.Map<Usuario>(usuarioViewModel);
            usuario.Id = id;
            usuario.Perfil = PerfilUsuario.Administrador;
            _usuarioAppService.Atualizar(usuario);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(PoliticasAutorizacao.UsuarioSESMTContaValida)]
        public ActionResult<UsuarioViewModel> DeleteUsuario(int id)
        {
            if (id == UsuarioId) return BadRequest("Não é permitida a auto-exclusão.");
            return _mapper.Map<UsuarioViewModel>(_usuarioAppService.Excluir(id));
        }

    }
}