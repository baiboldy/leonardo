using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Leo.Models
{
    public class Car
    {
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public decimal price { get; set; }
        public virtual IEnumerable<Img> img { get; set; }
        public string desciption { get; set; }
    }
}
