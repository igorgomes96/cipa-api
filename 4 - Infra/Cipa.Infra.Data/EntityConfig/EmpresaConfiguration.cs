using Cipa.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cipa.Infra.Data.EntityConfig
{
    public class EmpresaConfiguration : IEntityTypeConfiguration<Empresa>
    {
        public void Configure(EntityTypeBuilder<Empresa> builder)
        {
            builder.HasKey(e => e.Id);

            builder.Property(e => e.RazaoSocial)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(e => e.Cnpj)
                .HasMaxLength(14);

            builder.Property(e => e.InformacoesGerais)
               .HasMaxLength(255);

            builder.HasOne(e => e.Conta)
                .WithMany(e => e.Empresas)
                .HasForeignKey(e => e.ContaId)
                .IsRequired();

            builder.Property(e => e.Ativa)
                .IsRequired();

            builder.Property(e => e.DataCadastro)
                .IsRequired();

            builder.Ignore(e => e.CnpjFormatado).Ignore(e => e.EstabelecimentosAtivos);
        }
    }
}