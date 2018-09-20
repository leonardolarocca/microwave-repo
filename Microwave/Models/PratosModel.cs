using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Microwave.Models
{
    public class PratosModel
    {
        [Display(Name = "Nome do prato")]
        [Required(ErrorMessage = "<span class='text-danger'>Este campo é obrigatório!</span>")]
        public string nome { get; set; }

        [Display(Name = "Modo de preparo")]
        [Required(ErrorMessage = "<span class='text-danger'>Este campo é obrigatório!</span>")]
        public string instrucao { get; set; }

        [Display(Name = "Minutos")]
        [Range(0, 60, ErrorMessage = "<span class='text-danger'>Número inválido</span>")]
        [Required(ErrorMessage = "<span class='text-danger'>Este campo é obrigatório!</span>")]
        public int minutos { get; set; }

        [Display(Name = "Segundos")]
        [Range(0, 60, ErrorMessage = "<span class='text-danger'>Número inválido</span>")]
        [Required(ErrorMessage = "<span class='text-danger'>Este campo é obrigatório!</span>")]
        public int segundos { get; set; }

        [Display(Name = "Potencia")]
        public int potencia { get; set; } = 10;

        public List<object> PratosList = new List<object>();

        public void setPratosDefault()
        {
            PratosList.Add(new
            {
                nome = "Frango",
                instrucao = "Corte em pedaços pequenos, leve ao microondas em um recipiente apropriado, interrompa o processo para mexer se necessário.",
                minutos = 25,
                segundos = 0,
                potencia = 10,
                value = $"Frango;25;0;10;Corte em pedaços pequenos, leve ao microondas em um recipiente apropriado, interrompa o processo para mexer se necessário."
            });

            PratosList.Add(new 
            {
                nome = "Carne",
                instrucao = "Pode se cortar em pedaços médios ou pequenos, leve ao microondas em um recipiente apropriado.",
                minutos = 20,
                segundos = 0,
                potencia = 10,
                value = $"Carne;20;0;10;Pode se cortar em pedaços médios ou pequenos, leve ao microondas em um recipiente apropriado."
            });

            PratosList.Add(new 
            {
                nome = "Peixe",
                instrucao = "Corte em pedaços médios ou grandes, leve ao microondas em um recipiente apropriado, interrompa o processo para mexer se necessário",
                minutos = 15,
                segundos = 0,
                potencia = 8,
                value = $"Peixe;15;0;8;Corte em pedaços médios ou grandes, leve ao microondas em um recipiente apropriado, interrompa o processo para mexer se necessário"
            });

            PratosList.Add(new 
            {
                nome = "Arroz",
                instrucao = "Coloque os ingredientes em um recipiente apropriado, adicione 2x a quantidade de água, leve ao microondas",
                minutos = 15,
                segundos = 30,
                potencia = 8,
                value = $"Arroz;15;30;8;Coloque os ingredientes em um recipiente apropriado, adicione 2x a quantidade de água, leve ao microondas"
            });

            PratosList.Add(new 
            {
                nome = "Pipoca",
                instrucao = "Coloque no microondas a pipoca com o lado informado virado para cima.",
                minutos = 1,
                segundos = 30,
                potencia = 7,
                value = $"Pipoca;1;30;7;Coloque no microondas a pipoca com o lado informado virado para cima."
            });
        }
    }
}
