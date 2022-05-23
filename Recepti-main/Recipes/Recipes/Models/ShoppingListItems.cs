using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class ShoppingListItems
    {
        public int ID { get; set; }
        public int FoodID { get; set; }
        public int ShoppingListID { get; set; }
        public bool IsPurchased { get; set; }
        public double Quantity { get; set; }
        public virtual Food Food { get; set; }
        public virtual ShoppingList ShoppingList { get; set; }

    }
}
