using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IS404.Models
{
    public class GradeCalcModel
    {
        [Range(0,100)]
        public int Asgn { get; set; }

        public int Gproj { get; set; }

        public int Quiz { get; set; }

        public int Exam { get; set; }

        public int Intex { get; set; }
    }
}
