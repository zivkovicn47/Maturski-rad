using Recipes.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class Recipes
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public DifficultyLevel Difficulty { get; set; }
        public int NumberServes { get; set; }
        public int MinuteForPrepere { get; set; }
        public string Text { get; set; }
        public DateTime CreateAt { get; set; }
        //public virtual ICollection<UsedRecipes> UsedRecipes { get; set; }
        //public virtual ICollection<Ingredients> Ingredients { get; set; }
    }
}
