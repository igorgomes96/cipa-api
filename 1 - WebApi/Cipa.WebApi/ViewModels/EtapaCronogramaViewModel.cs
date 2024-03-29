using Cipa.Domain.Enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace Cipa.WebApi.ViewModels
{

    public class EtapaCronogramaViewModel : EtapaBaseViewModel
    {
        public int EleicaoId { get; set; }
        [Required(ErrorMessage = "A data prevista para essa etapa deve ser informada.")]
        public DateTime DataPrevista { get; set; }
        public DateTime? DataRealizada { get; set; }
        public ECodigoEtapaObrigatoria? EtapaObrigatoriaId { get; set; }
        public string PosicaoEtapa { get; set; }
        public string ErroMudancaEtapa { get; set; }
        public bool PossuiTemplates { get; set; }

    }
}
