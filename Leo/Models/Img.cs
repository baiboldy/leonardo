using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.Web;
using Microsoft.AspNetCore.Http;

namespace Leo.Models
{
    public class Img
    {
        public int id { get; set; }
        [Required]
        public string path { get; set; }
        [Required]
        public virtual int carId { get; set; }
        public IFormFile ImageFile { get; set; }
    }
}
