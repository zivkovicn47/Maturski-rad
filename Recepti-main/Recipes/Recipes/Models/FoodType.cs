using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class FoodType
    {
        public int ID{ get; set; }
        public string Name { get; set; }
        public string Unit { get; set; }
        public string DefaultQuantity { get; set; }
    }
}
