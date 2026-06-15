using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetInvoice()
        {
            var items = new[]
            {
                new
                {
                    name = "Widget A",
                    price = 19.99
                }
            };

            return Ok(new { items });
        }
    }
}