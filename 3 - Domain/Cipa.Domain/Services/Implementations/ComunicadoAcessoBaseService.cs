using System.Collections.Generic;
using Cipa.Domain.Entities;
using Cipa.Domain.Helpers;
using Cipa.Domain.Services.Interfaces;

namespace Cipa.Domain.Services.Implementations
{
    public abstract class ComunicadoAcessoBaseService : ComunicadoBaseService
    {

        public ComunicadoAcessoBaseService(Usuario usuario)
        {
            Usuario = usuario;
            ParametrosUtilizados.Add("@LINK");
        }

        protected Usuario Usuario { get; }
        
        protected string LinkCadastro =>
            $"{Links.URL}{Links.Cadastro}/{Usuario.CodigoRecuperacao.ToString()}";

        protected string LinkResetSenha =>
            $"{Links.URL}{Links.Reset}/{Usuario.CodigoRecuperacao.ToString()}";
    }
}