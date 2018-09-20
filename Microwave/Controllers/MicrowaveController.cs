using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microwave.Models;
using System;
using System.Collections.Generic;

namespace Microwave.Controllers
{
    public class MicrowaveController : Controller
    {
        public IActionResult Index()
        {
            var Microwave = new MicrowaveModel();
            Microwave.NovoPrato.setPratosDefault();            
            return View(Microwave);
        }
    }
}   
