using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Controllers
{
    public class StuffController : Controller
    {
        public IActionResult Index()
        {
            throw new IndexOutOfRangeException();
            // return View();
        }
    }
}
