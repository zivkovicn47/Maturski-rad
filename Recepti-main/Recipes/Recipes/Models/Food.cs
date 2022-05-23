using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class Food
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public FoodType FoodType { get; set; }
        public virtual ICollection<Ingredients> Ingredients { get; set; }
        public virtual ICollection<StoredMaterials> StoredMaterials { get; set; }
        public virtual ICollection<ShoppingListItems> ShoppingListItems { get; set; }
    }
}
