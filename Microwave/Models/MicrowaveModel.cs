using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Microwave.Models
{
    public class MicrowaveModel
    {
        [Display(Name = "Tipo do prato")]
        public PratosModel NovoPrato { get; set; }

        [Display(Name = "Tempo")]      
        public string tempo { get; set; }       

        [Display(Name = "Minutos")]
        [Range(0,59, ErrorMessage = "<span class='text-danger'>Número inválido</span>")]
        public int minutos { get; set; }

        [Display(Name = "Segundos")]
        [Range(0, 59, ErrorMessage = "<span class='text-danger'>Número inválido</span>")]
        public int segundos { get; set; }

        [Display(Name = "Potencia")]
        [Range(0, 10, ErrorMessage = "<span class='text-danger'>Número inválido</span>")]
        public int potencia { get; set; } = 10;

        public string prato { get; set; }

        

        public MicrowaveModel ()
        {
            NovoPrato = new PratosModel();
        }
    }
}
