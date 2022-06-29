using Microsoft.AspNetCore.Mvc;

namespace turkish_restaurant.controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
