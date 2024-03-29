using Cipa.Domain.Entities;
using Cipa.Domain.Enums;
using Cipa.Domain.Exceptions;
using Xunit;

namespace Cipa.Domain.Test.Entities
{
    public class ContaTest
    {

        [Fact]
        public void AdicionarEtapaPadrao_EtapaObrigatoriaNaoDuplicada_AdicionaEtapaAtualizaOrdem()
        {
            var conta = new Conta();
            var etapaConvocacao = new EtapaPadraoConta("Convocação", "Etapa de Convocação", 1, 1, 1, ECodigoEtapaObrigatoria.Convocacao);
            var etapaInscricao = new EtapaPadraoConta("Inscrição", "Etapa de Inscrições", 2, 1, 1, ECodigoEtapaObrigatoria.Inscricao);
            var etapaVotacao = new EtapaPadraoConta("Votação", "Etapa de Votação", 1, 1, 1, ECodigoEtapaObrigatoria.Votacao);
            conta.AdicionarEtapaPadrao(etapaVotacao);
            conta.AdicionarEtapaPadrao(etapaConvocacao);
            conta.AdicionarEtapaPadrao(etapaInscricao);
            Assert.Collection(conta.EtapasPadroes,
                etapa =>
                {
                    Assert.Equal(etapa, etapaConvocacao);
                    Assert.Equal(1, etapa.Ordem);
                },
                etapa =>
                {
                    Assert.Equal(etapa, etapaInscricao);
                    Assert.Equal(2, etapa.Ordem);
                },
                etapa =>
                {
                    Assert.Equal(etapa, etapaVotacao);
                    Assert.Equal(3, etapa.Ordem);
                }
            );
        }

        [Fact]
        public void AdicionarEtapaPadrao_EtapaObrigatoriaDuplicada_ThowsCustomException()
        {
            var conta = new Conta();
            var etapaConvocacao = new EtapaPadraoConta("Convocação", "Etapa de Convocação", 1, 1, 1, ECodigoEtapaObrigatoria.Convocacao);
            var etapaInscricao = new EtapaPadraoConta("Inscrição", "Etapa de Inscrições", 2, 1, 1, ECodigoEtapaObrigatoria.Inscricao)
            {
                EtapaObrigatoria = new EtapaObrigatoria
                {
                    Nome = "Etapa Obrigatória Inscrição"
                }
            };
            var etapaVotacao = new EtapaPadraoConta("Votação", "Etapa de Votação", 3, 1, 1, ECodigoEtapaObrigatoria.Votacao);
            conta.AdicionarEtapaPadrao(etapaVotacao);
            conta.AdicionarEtapaPadrao(etapaConvocacao);
            conta.AdicionarEtapaPadrao(etapaInscricao);
            var exception = Assert.Throws<CustomException>(() => conta.AdicionarEtapaPadrao(new EtapaPadraoConta("Etapa Duplicada", string.Empty, 2, 1, 1, ECodigoEtapaObrigatoria.Inscricao)));
            Assert.Equal("Já há uma etapa correspondente à etapa obrigatória 'Etapa Obrigatória Inscrição'.", exception.Message);
        }

        [Fact]
        public void RemoverEtapaPadrao_EtapaObrigatoria_ThrowsCustomException()
        {
            var conta = new Conta();
            var etapaConvocacao = new EtapaPadraoConta("Convocação", "Etapa de Convocação", 1, 1, 1, ECodigoEtapaObrigatoria.Convocacao);
            var etapaInscricao = new EtapaPadraoConta("Inscrição", "Etapa de Inscrições", 2, 1, 1, ECodigoEtapaObrigatoria.Inscricao);
            var etapaVotacao = new EtapaPadraoConta("Votação", "Etapa de Votação", 1, 1, 1, ECodigoEtapaObrigatoria.Votacao);
            var etapaAta = new EtapaPadraoConta("Ata", "Etapa de Geração da Ata", 4, 1, 1, ECodigoEtapaObrigatoria.Ata);

            conta.AdicionarEtapaPadrao(etapaVotacao);
            conta.AdicionarEtapaPadrao(etapaConvocacao);
            conta.AdicionarEtapaPadrao(etapaInscricao);
            conta.AdicionarEtapaPadrao(etapaAta);

            var exception = Assert.Throws<CustomException>(() => conta.RemoverEtapaPadrao(new EtapaPadraoConta("", "", 2, 1, 1)));
            Assert.Equal("Não é permitido remover uma etapa obrigatória.", exception.Message);

        }

        [Fact]
        public void RemoverEtapaPadrao_EtapaNaoObrigatoria_RemoveEtapaAtualizaOrdem()
        {
            var conta = new Conta();
            var etapaConvocacao = new EtapaPadraoConta("Convocação", "Etapa de Convocação", 1, 1, 1, ECodigoEtapaObrigatoria.Convocacao);
            var etapaInscricao = new EtapaPadraoConta("Inscrição", "Etapa de Inscrições", 2, 1, 1, ECodigoEtapaObrigatoria.Inscricao);
            var etapaVotacao = new EtapaPadraoConta("Votação", "Etapa de Votação", 1, 1, 1, ECodigoEtapaObrigatoria.Votacao);
            var novaEtapa = new EtapaPadraoConta("Etapa não Obrigatória", "Etapa de Geração da Ata", 2, 1, 1);

            conta.AdicionarEtapaPadrao(etapaVotacao);
            conta.AdicionarEtapaPadrao(etapaConvocacao);
            conta.AdicionarEtapaPadrao(etapaInscricao);
            conta.AdicionarEtapaPadrao(novaEtapa);

            conta.RemoverEtapaPadrao(new EtapaPadraoConta("", "", 2, 1, 1));
            Assert.Collection(conta.EtapasPadroes,
                etapa =>
                {
                    Assert.Equal(etapa, etapaConvocacao);
                    Assert.Equal(1, etapa.Ordem);
                },
                etapa =>
                {
                    Assert.Equal(etapa, etapaInscricao);
                    Assert.Equal(2, etapa.Ordem);
                },
                etapa =>
                {
                    Assert.Equal(etapa, etapaVotacao);
                    Assert.Equal(3, etapa.Ordem);
                }
            );
        }

        [Fact]
        public void VerificarSeAindaPermiteCadastroDeEstabelecimentos_NaoAtingiuLimite_RetornaTrue()
        {
            var empresa1 = new Empresa("Empresa 1", "75890693000134");
            var empresa2 = new Empresa("Empresa 2", "83059997000182");
            var empresa3 = new Empresa("Empresa 3", "55900562000183");
            empresa1.Estabelecimentos.Add(new Estabelecimento("Uberlândia", "Endereço", 1));
            var estabelecimentoInativo = new Estabelecimento("Uberlândia", "Endereço", 1);
            estabelecimentoInativo.Inativar();
            empresa1.Estabelecimentos.Add(estabelecimentoInativo);
            empresa2.Estabelecimentos.Add(new Estabelecimento("Uberlândia", "Endereço", 2));
            empresa2.Estabelecimentos.Add(new Estabelecimento("Uberlândia", "Endereço", 2));
            empresa3.Estabelecimentos.Add(estabelecimentoInativo);
            empresa3.Inativar();

            var conta = new Conta
            {
                QtdaEstabelecimentos = 4
            };
            conta.Empresas.Add(empresa1);
            conta.Empresas.Add(empresa2);
            conta.Empresas.Add(empresa3);

            Assert.True(conta.VerificarSeAindaPermiteCadastroDeEstabelecimentos());
        }

        [Fact]
        public void VerificarSeAindaPermiteCadastroDeEstabelecimentos_JaAtingiuLimite_RetornaFalse()
        {
            var empresa1 = new Empresa("Empresa 1", "75890693000134");
            var empresa2 = new Empresa("Empresa 2", "83059997000182");
            empresa1.Estabelecimentos.Add(new Estabelecimento("Uberlândia", "Endereço", 1));
            empresa1.Estabelecimentos.Add(new Estabelecimento("Uberlândia", "Endereço", 1));
            empresa2.Estabelecimentos.Add(new Estabelecimento("Uberlândia", "Endereço", 2));
            empresa2.Estabelecimentos.Add(new Estabelecimento("Uberlândia", "Endereço", 2));
            var conta = new Conta
            {
                QtdaEstabelecimentos = 4
            };
            conta.Empresas.Add(empresa1);
            conta.Empresas.Add(empresa2);

            Assert.False(conta.VerificarSeAindaPermiteCadastroDeEstabelecimentos());
        }
    }
}