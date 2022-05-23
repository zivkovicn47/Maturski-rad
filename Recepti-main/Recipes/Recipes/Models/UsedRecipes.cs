using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class UsedRecipes
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public int RecipeID { get; set; }
        public DateTime UsedTime { get; set; }
        public double Quantity { get; set; }
        public virtual Recipes Recipe { get; set; }
        public virtual User User { get; set; }
    }
}
