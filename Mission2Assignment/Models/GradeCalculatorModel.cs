using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float Assignment { get; set; }
        [Range(0, 100)]
        public float GroupProject { get; set; }
        [Range(0, 100)]
        public float Quiz { get; set; }
        [Range(0, 100)]
        public float Exam { get; set; }
        [Range(0, 100)]
        [MaxLength(5)]
        public float Intex { get; set; }
    }
}
